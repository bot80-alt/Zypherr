import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import React from 'react'

export default function ViewRequest() {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>Manage Requests</Text>
            </View>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {[...Array(10)].map((_, index) => (
                    <Card key={index} style={styles.card} elevation={0}>
                        <Card.Content>
                            <Text style={styles.titleText}>Prescription {index + 1}</Text>
                            <Text style={styles.descriptionText}>
                                This is a description of prescription {index + 1}.
                            </Text>
                        </Card.Content>
                    </Card>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 18,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 12,
    },
    headerText: {
        fontSize: 22,
        fontWeight: "700",
        color: "#111",
    },
    scrollContent: {
        paddingBottom: 36,
        width: '100%',
    },
    card: {
        borderRadius: 16,
        paddingVertical: 6,
        marginBottom: 18,
        backgroundColor: "#fff",
        shadowColor: 'transparent',
        shadowOpacity: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 0,
        elevation: 1,
        width: 370,
    },
    titleText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
    },
    descriptionText: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
})