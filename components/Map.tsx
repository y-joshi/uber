// components/Map.tsx
import { calculateRegion } from '@/lib/map';
import { useLocationStore } from '@/store';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });

  return (
    <View className="w-full h-full rounded rounded-4xl border-red-500 border-2">
      <MapView
        provider={PROVIDER_DEFAULT}
        className="w-full h-full rounded-2xl"
        style={StyleSheet.absoluteFill}
        tintColor="black"
        // mapType="mutedStandard"
      />
    </View>
  );
};

export default Map;
