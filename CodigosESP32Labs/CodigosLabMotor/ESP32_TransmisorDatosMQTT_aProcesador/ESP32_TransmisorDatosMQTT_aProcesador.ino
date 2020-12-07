#define RXD2 16
#define TXD2 17

int LED_BUILTIN = 2;

char chars[16];
uint8_t pwmVal;

#include "EspMQTTClient.h"

EspMQTTClient client(
  "Tombos hijueputas",
  "DongnutLa09",
  "3.21.85.235",  // MQTT Broker server ip
  "",   // Can be omitted if not needed
  "",   // Can be omitted if not needed
  "ESPMotor",     // Client name that uniquely identify your device
  1883              // The MQTT port, default to 1883. this line can be omitted
);


void setup() {
  client.enableDebuggingMessages(); // Enable debugging messages sent to serial output
  client.enableHTTPWebUpdater(); // Enable the web updater. User and password default to values of MQTTUsername and MQTTPassword. These can be overrited with enableHTTPWebUpdater("user", "password").
  client.enableLastWillMessage("TestClient/lastwill", "I am going offline");  // You can activate the retain flag by setting the third parameter to true
  Serial.begin(9600);
  Serial2.begin(19200, SERIAL_8N1, RXD2, TXD2);
  pinMode(LED_BUILTIN, OUTPUT);
}

void onConnectionEstablished()
{
     client.subscribe("/Motor", [](const String & payload) {
     Serial.println(payload);

    payload.toCharArray(chars,16);
    pwmVal = atoi(chars);
      
});
}

void loop() { 
    client.loop();
    if(pwmVal > 1){
      digitalWrite(LED_BUILTIN, HIGH);
      } else{
      digitalWrite(LED_BUILTIN, LOW);
        }
    Serial2.write(pwmVal); 
}
