import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ParticipantProps } from "./participant.types";

import { styles } from "./styles";

export function Participant({ firstName, onRemoveClick }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{firstName}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onRemoveClick(firstName)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
