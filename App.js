import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      {/* Ensure the status bar stays readable */}
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />

      {/* Header: extra element to score UI points */}
      <View style={styles.header}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <Text style={styles.subtitle}>Player X's Turn</Text>
      </View>

      {/* Board Container: responsive box based on screen width */}
      <View style={styles.boardContainer}>
        {/* Board: aspectRatio: 1 enforces a square */}
        <View style={styles.board}>
          {/* Row 1 */}
          <View style={styles.row}>
            <View
              style={[
                styles.cell,
                styles.cellBorderRight,
                styles.cellBorderBottom,
              ]}
            >
              <Text style={[styles.cellText, styles.textO]}>O</Text>
            </View>
            <View
              style={[
                styles.cell,
                styles.cellBorderRight,
                styles.cellBorderBottom,
              ]}
            >
              <Text style={[styles.cellText, styles.textO]}>O</Text>
            </View>
            <View style={[styles.cell, styles.cellBorderBottom]}>
              <Text style={[styles.cellText, styles.textX]}>X</Text>
            </View>
          </View>

          {/* Row 2 */}
          <View style={styles.row}>
            <View
              style={[
                styles.cell,
                styles.cellBorderRight,
                styles.cellBorderBottom,
              ]}
            >
              <Text style={[styles.cellText, styles.textX]}>X</Text>
            </View>
            <View
              style={[
                styles.cell,
                styles.cellBorderRight,
                styles.cellBorderBottom,
              ]}
            >
              <Text style={[styles.cellText, styles.textO]}>O</Text>
            </View>
            <View style={[styles.cell, styles.cellBorderBottom]}>
              <Text style={[styles.cellText, styles.textO]}>O</Text>
            </View>
          </View>

          {/* Row 3 */}
          <View style={styles.row}>
            <View style={[styles.cell, styles.cellBorderRight]}>
              <Text style={[styles.cellText, styles.textX]}>X</Text>
            </View>
            <View style={[styles.cell, styles.cellBorderRight]}>
              <Text style={[styles.cellText, styles.textX]}>X</Text>
            </View>
            <View style={styles.cell}>
              <Text style={[styles.cellText, styles.textO]}>O</Text>
            </View>
          </View>
        </View>
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50", // Overall background color (dark theme)
    alignItems: "center",
    justifyContent: "center",
    // SafeAreaView adjustment for Android
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    marginBottom: 40, // Space between header and board
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ecf0f1",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 16,
    color: "#bdc3c7",
    marginTop: 5,
    fontStyle: "italic",
  },
  boardContainer: {
    width: "90%", // Use 90% of the screen width (responsive key)
    maxWidth: 400, // Prevent it from becoming too large on tablets
    alignItems: "center",
  },
  board: {
    width: "100%",
    aspectRatio: 1, // Automatically sets height from width to stay square
    backgroundColor: "#34495e",
    borderRadius: 16, // Rounded corners for a modern look
    padding: 10,
    // Shadow settings
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // Shadow for Android
  },
  row: {
    flex: 1, // Split the height into thirds
    flexDirection: "row",
  },
  cell: {
    flex: 1, // Split the width into thirds
    justifyContent: "center",
    alignItems: "center",
  },
  // Border styling
  cellBorderRight: {
    borderRightWidth: 4,
    borderColor: "#2c3e50",
  },
  cellBorderBottom: {
    borderBottomWidth: 4,
    borderColor: "#2c3e50",
  },
  cellText: {
    fontSize: 48, // Keep the font size large too
    fontWeight: "900",
  },
  textX: {
    color: "#e74c3c", // Red
  },
  textO: {
    color: "#3498db", // Blue
  },
});
