// GoalsScreen.tsx
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  Card,
  Text,
  Chip,
  Avatar,
  IconButton,
  useTheme,
} from "react-native-paper";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type Goal = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  peopleCount: number;
  points: number;
  bgColor: string;
  tagColor: string;
};

const SAMPLE_GOALS: Goal[] = [
  {
    id: "1",
    title: '"Eat me!" shelf',
    difficulty: "Medium",
    description:
      "A little organisation goes a long way. Try using a designated shelf for the foods expiring fastest, so they get gobbled up.",
    peopleCount: 63098,
    points: 150,
    bgColor: "#E8F6EA",
    tagColor: "#6FCF97",
  },
  {
    id: "2",
    title: '"Eat me!" shelf',
    difficulty: "Easy",
    description:
      "A little organisation goes a long way. Try using a designated shelf for the foods expiring fastest, so they get gobbled up.",
    peopleCount: 63098,
    points: 150,
    bgColor: "#EEF5FF",
    tagColor: "#6AA8FF",
  },
  {
    id: "3",
    title: '"Eat me!" shelf',
    difficulty: "Hard",
    description:
      "A little organisation goes a long way. Try using a designated shelf for the foods expiring fastest, so they get gobbled up.",
    peopleCount: 63098,
    points: 150,
    bgColor: "#FFF6EE",
    tagColor: "#FF8A80",
  },
];

export default function DashBoard() {

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Live Prescriptions</Text>
          <IconButton
            icon="dots-vertical"
            size={20}
            onPress={() => {}}
            style={styles.headerIcon}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {SAMPLE_GOALS.map((g) => (
            <Card
              key={g.id}
              style={[
                styles.card,
                {
                  backgroundColor: g.bgColor
                },
              ]}
              elevation={0}
            >
              <Card.Content>
                <View style={styles.cardTopRow}>
                  <Chip
                    style={[styles.chip, { backgroundColor: g.tagColor }]}
                    textStyle={styles.chipText}
                  >
                    {g.difficulty}
                  </Chip>

                  <View style={styles.pointsPill}>
                    <Text style={styles.pointsText}>+{g.points}</Text>
                  </View>
                </View>

                <Text style={styles.titleText}>{g.title}</Text>

                <Text numberOfLines={3} style={styles.descriptionText}>
                  {g.description}
                </Text>

                <View style={styles.cardBottomRow}>
                  <View style={styles.peopleRow}>
                    <Avatar.Icon
                      size={20}
                      icon="account"
                      style={styles.avatarIcon}
                    />
                    <Text style={styles.peopleText}>
                      {g.peopleCount.toLocaleString()} People doing this
                    </Text>
                  </View>

                  <TouchableOpacity style={styles.ctaButton}>
                    <Text style={styles.ctaText}>Start</Text>
                  </TouchableOpacity>
                </View>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const PADDING = 16;
const CARD_WIDTH = Math.min(360, SCREEN_WIDTH - PADDING * 2);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F7F7F8", // overall page bg (soft grey like image)
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 18,
  },
  headerRow: {
    width: CARD_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },
  headerIcon: {
    margin: 0,
  },
  scrollContent: {
    paddingBottom: 36,
    width: CARD_WIDTH,
  },
  card: {
    borderRadius: 16,
    paddingVertical: 6,
    marginBottom: 18,
      shadowColor: 'transparent',
  shadowOpacity: 0,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 0,
  // Disable Android shadow
  elevation: 1,
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  chip: {
    height: 28,
    justifyContent: "center",
    borderRadius: 14,
    elevation: 0,
  },
  chipText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  pointsPill: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 0.3,
    borderColor: "#DDD",
  },
  pointsText: {
    fontWeight: "700",
    fontSize: 12,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
    color: "#0B1330",
  },
  descriptionText: {
    fontSize: 13,
    color: "#4B5563",
    marginBottom: 12,
    lineHeight: 18,
  },
  cardBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  peopleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarIcon: {
    marginRight: 8,
    backgroundColor: "transparent",
    elevation: 0,
  },
  peopleText: {
    fontSize: 12,
    color: "#374151",
  },
  ctaButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: "#E5E7EB",
  },
  ctaText: {
    fontSize: 13,
    fontWeight: "700",
  },
});