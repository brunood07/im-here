import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Participant } from "../../components/Participant";
import { ParticipantRegisterProps } from "./home.types";
import { styles } from "./styles";

export default function Home() {
  const [participants, setParticipants] = useState<ParticipantRegisterProps[]>(
    [] as ParticipantRegisterProps[]
  );

  const handleParticipantAdd = (firstName: string) => {
    const firtNames = participants.map((item) => {
      return item.firstName;
    });

    if (firtNames.includes(firstName)) {
      Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com este nome."
      );
    }

    const id = participants.length + 1;
    setParticipants((state) => {
      return [...state, { id, firstName }];
    });
  };

  const handleParticipantRemove = (firstName: string) => {
    Alert.alert("Remover", `Remover o participante ${firstName}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado"),
      },
    ]);
    console.log("Você clicou no botão de remover!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd("test")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item.firstName}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            firstName={item.firstName}
            onRemoveClick={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
