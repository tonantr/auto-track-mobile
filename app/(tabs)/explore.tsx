import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';



export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Auto Track Mobile</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Manage Your Vehicles</Text>
        <Text>- Add and manage multiple vehicles</Text>
        <Text>- Store Make, Model, Year, and VIN</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Service & Maintenance Tracking</Text>
        <Text>- Log oil changes, tire rotations, and more</Text>
        <Text>- Track brake replacements and battery inspections</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>VIN Lookup & Auto Data</Text>
        <Text>- Retrieve vehicle details from NHTSA & Canadian VIN API</Text>
        <Text>- Get recall information and specs</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reminders & Notifications</Text>
        <Text>- Set automatic reminders for upcoming maintenance</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dashboard & Reports</Text>
        <Text>- View your vehicle’s complete service history</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',

  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
});