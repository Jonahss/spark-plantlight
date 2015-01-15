int relay = D0;

void setup() {
    Spark.function("relay", relaycontrol);
    pinMode(relay, OUTPUT);
}

void loop() {

}

int relaycontrol(String command) {

    if (command == "ON") {
        digitalWrite(relay, HIGH);
    } else {
        digitalWrite(relay, LOW);
    }

    return 1;
}
