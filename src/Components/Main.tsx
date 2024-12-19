'use client'
import { useState, useEffect, useRef } from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs';
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Loader2 } from "lucide-react"

interface Prediction {
  className: string;
  probability: number;
}





const Main = () => {
  const [isModelLoading, setIsModelLoading] = useState<boolean>(false)
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null)
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [results, setResults] = useState<Prediction[]>([])
  const [error, setError] = useState<string | null>(null)


  // manual backend -- tenserflow wasn't working
  const setupBackend = async () => {
    try {
      await tf.setBackend('webgl'); // Use WebGL
      console.log('Using WebGL backend');
    } catch (error) {
      console.error('WebGL backend not available, falling back to WASM');
      await tf.setBackend('wasm'); // Fallback to WASM
    }
    await tf.ready(); // Wait for the backend to be ready
  };

  useEffect(() => {
    setupBackend();
  }, []);

  const imageRef = useRef<HTMLImageElement>(null)

  const loadModel = async () => {
    setIsModelLoading(true)
    try {
      const loadedModel = await mobilenet.load()
      setModel(loadedModel)
      setIsModelLoading(false)
    } catch (error) {
      console.error(error)
      setIsModelLoading(false)
      setError('Failed to load the model. Please try again.')
    }
  }

  useEffect(() => {
    loadModel()
  }, [])

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files && files.length > 0) {
      const url = URL.createObjectURL(files[0])
      setImageURL(url)
    } else {
      setImageURL(null)
    }
  }

  const identify = async () => {
    if (!imageRef.current || !model) return

    setResults([])
    try {
      const results = await model.classify(imageRef.current)
      setResults(results)
    } catch (error) {
      console.error(error)
      setError('Failed to identify the image. Please try again.')
    }
  }

  return (

      <Card className="bg-[#D5B840] w-full max-w-md mx-auto border-2 border-black">
        <CardHeader className='flex items-center'>
          <CardTitle>Image Prediction App</CardTitle>
        </CardHeader>
        <CardContent>
          {isModelLoading && (
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <p>Model loading...</p>
            </div>
          )}
          {error && <p className="text-destructive">{error}</p>}
          <div className="space-y-4">
            <Input
            className='bg-white'
              type="file"
              accept="image/*"
              capture="environment"
              onChange={uploadImage}
              aria-label="Upload image"             
            />
            {imageURL && (
              <div className="flex flex-col items-center">
                <img
                  src={imageURL}
                  alt="Upload Preview"
                  crossOrigin="anonymous"
                  ref={imageRef}
                  className="max-w-full h-auto mb-4 rounded-md"
                />
                <Button className='bg-black text-white rounded-lg' onClick={identify} disabled={isModelLoading || !model}>
                  Identify Image
                </Button>
              </div>
            )}
            {results.length > 0 && (
              <div className='bg-[#A0E7E5] p-4 border-2 border-black'>
                <h2 className="text-xl font-bold mb-2">Predictions:</h2>
                <ul className="space-y-2">
                  {results.map((result) => (
                    <li key={result.className} className="flex justify-between items-center">
                      <span>{result.className}</span>
                      <span className="font-mono">{(result.probability * 100).toFixed(2)}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>    
  )
}

export default Main
