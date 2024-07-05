import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 48,
        margin: "auto",
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "lightgray",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
      },
  scrollContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 36,
    textAlign: "center",
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: 20,
    width: 260,
    alignSelf: "center",
  },
  photoContainer: {
    position: "relative",
    marginVertical: 10,
    alignItems: "center",
  },
  photo: {
    width: 300,
    height: 400,
    resizeMode: "contain",
  },
  photoId: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
  },
});
