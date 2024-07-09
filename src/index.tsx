import { Text, View } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function App() {
  return (
    <View>
      <Text>component testing</Text>
    </View>
  );
}
