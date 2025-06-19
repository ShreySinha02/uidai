
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserProfile = () => {
  const user = {
    name: "Shrey Sinha",
    email: "shrey8340@gmail.com",
    role: "Full Stack Developer",
  };

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.heading}>👤 User Profile</Text>
      <Text><Text style={styles.label}>Name:</Text> {user.name}</Text>
      <Text><Text style={styles.label}>Email:</Text> {user.email}</Text>
      <Text><Text style={styles.label}>Role:</Text> {user.role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    marginBottom: 20,
    backgroundColor: "#f0f8ff",
    padding: 15,
    borderRadius: 8,
    elevation: 2
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  label: {
    fontWeight: "bold"
  }
});

export default UserProfile;
