import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Search, Navigation } from 'lucide-react';

interface LocationSearchProps {
  onLocationSelect: (location: { lat: number; lng: number; address: string }) => void;
  onSelectOnMap: () => void;
}

interface PlacePrediction {
  place_id: string;
  description: string;
}

export default function LocationSearch({ onLocationSelect, onSelectOnMap }: LocationSearchProps) {
  const [query, setQuery] = useState('');
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      autocompleteService.current = new google.maps.places.AutocompleteService();
      const dummyDiv = document.createElement('div');
      placesService.current = new google.maps.places.PlacesService(dummyDiv);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2 && autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
        { input: value, types: ['geocode'] },
        (predictions, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            setPredictions(predictions);
            setShowPredictions(true);
          } else {
            setPredictions([]);
            setShowPredictions(false);
          }
        }
      );
    } else {
      setPredictions([]);
      setShowPredictions(false);
    }
  };

  const handlePredictionSelect = (prediction: PlacePrediction) => {
    if (!placesService.current) return;

    setIsLoading(true);
    placesService.current.getDetails(
      { placeId: prediction.place_id },
      (place, status) => {
        setIsLoading(false);
        if (status === google.maps.places.PlacesServiceStatus.OK && place && place.geometry) {
          const location = {
            lat: place.geometry.location!.lat(),
            lng: place.geometry.location!.lng(),
            address: prediction.description
          };
          onLocationSelect(location);
          setQuery(prediction.description);
          setShowPredictions(false);
        }
      }
    );
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            address: 'Current Location'
          };
          onLocationSelect(location);
          setQuery('Current Location');
          setIsLoading(false);
        },
        (error) => {
          console.error('Error getting current location:', error);
          setIsLoading(false);
          alert('Unable to get your current location. Please enter your location manually.');
        }
      );
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <MapPin className="h-5 w-5 text-blue-500 mr-2" />
        Search by Location
      </h2>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Enter your location..."
          value={query}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        {showPredictions && predictions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-10 max-h-60 overflow-y-auto">
            {predictions.map((prediction) => (
              <div
                key={prediction.place_id}
                onClick={() => handlePredictionSelect(prediction)}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-700">{prediction.description}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex space-x-3">
        <button
          onClick={onSelectOnMap}
          className="flex items-center space-x-2 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <MapPin className="h-4 w-4" />
          <span>Select on Map</span>
        </button>
        
        <button
          onClick={handleCurrentLocation}
          disabled={isLoading}
          className="flex items-center space-x-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50"
        >
          <Navigation className="h-4 w-4" />
          <span>{isLoading ? 'Detecting...' : 'Detect Location'}</span>
        </button>
      </div>
    </div>
  );
}