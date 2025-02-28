import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle, G, Text as SvgText } from 'react-native-svg';

const TimeScreen = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const radius = 100;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, timeLeft]);

  const progress = ((60 - timeLeft) / 60) * circumference;

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTimeLeft(60);
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Timer</Text>
      <Svg height="250" width="250" viewBox="0 0 250 250">
        <Circle
          cx="125"
          cy="125"
          r={radius}
          stroke="#ddd"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx="125"
          cy="125"
          r={radius}
          stroke="#FF8B00"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          transform="rotate(-90, 125, 125)"
        />
        <G>
          <SvgText
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            fontSize="40"
            fontWeight="bold"
            fill="#333"
          >
            {timeLeft}
          </SvgText>
        </G>
      </Svg>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF8B00',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TimeScreen;