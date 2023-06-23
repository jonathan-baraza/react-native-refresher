import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";
import { useRef, useState } from "react";

const AnimationIndex = () => {
  const boxOpacityAnimationValue = useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = useState(false);

  const handleFadeInBox = () => {
    Animated.timing(boxOpacityAnimationValue, {
      duration: 1000,
      toValue: 1,
      delay: 200,
      useNativeDriver: true,
    }).start();
    // setIsVisible(true);
  };
  const handleFadeOutBox = () => {
    Animated.timing(boxOpacityAnimationValue, {
      duration: 1000,
      toValue: 0,
      useNativeDriver: true,
    }).start();
    // setIsVisible(false);
  };

  const handleCallbackMethod = () => {
    Animated.timing(boxOpacityAnimationValue, {
      duration: 1000,
      toValue: 1,
      delay: 200,
      useNativeDriver: true,
    }).start(() => {
      //first way to set value on callback
      // boxOpacityAnimationValue.setValue(0.5);
      //another way
      Animated.timing(boxOpacityAnimationValue, {
        delay: 1000,
        duration: 1000,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    });
  };

  const opacityStyle = {
    opacity: boxOpacityAnimationValue,
  };

  return (
    <View
      style={styles.container}
      className="flex-1 items-center justify-center space-y-3"
    >
      <Animated.View
        style={opacityStyle}
        ref={boxOpacityAnimationValue}
        className="w-[200px] h-[200px] bg-red-400 mb-12"
      ></Animated.View>

      <TouchableOpacity
        onPress={handleFadeInBox}
        className={`bg-[#007acc] p-3 rounded px-6 `}
      >
        <Text className="text-white">Fade In Box</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleFadeOutBox}
        className="bg-[#007acc] p-3 rounded px-6"
      >
        <Text className="text-white">Fade Out Box</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleCallbackMethod}
        className="bg-[#007acc] p-3 rounded px-6"
      >
        <Text className="text-white">handle callback timing method</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default AnimationIndex;
