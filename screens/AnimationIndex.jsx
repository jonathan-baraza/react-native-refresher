import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Animated,
  Button,
} from "react-native";
import { useRef } from "react";

const AnimationIndex = () => {
  const boxOpacityAnimationValue = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={styles.container}
      className="flex-1 items-center justify-center"
    >
      <Animated.View
        ref={boxOpacityAnimationValue}
        className="w-[200px] h-[200px] bg-red-400 mb-12"
      ></Animated.View>

      <Button title="Fade this box p-3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default AnimationIndex;
