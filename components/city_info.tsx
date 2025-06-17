import { Text } from 'react-native';

export default function CityInfo({ city }: { city: string }) {
  const facts: Record<string, string> = {
    Calgary: "Calgary is the third most diverse major city in Canada with more than 120 languages spoken in the city and Calgary has the sunniest days all year round in Canada.",
    Vancouver: "Vancouver Is Called the “Hollywood of the North” and the cosmetic treatment Botox was invented in Vancouver",
  };

  return (
    <Text style={{ marginTop: 10, fontSize: 14 }}>
      {facts[city] || "Interesting facts coming soon!"}
    </Text>
  );
}
