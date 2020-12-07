int pwmVal;
int pwm1;
int pwm2;

int pin5 = D5;
int pin6 = D6;

HardwareSerial Serial2(D0,D1);//(PB15, PB6);

//char received_data;
void setup() {
  Serial.begin(9600);
  pinMode(pin5, OUTPUT);
  pinMode(pin6, OUTPUT);

  Serial2.begin(19200);

  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {

    //Serial.println("Valor: ");
    pwmVal = Serial2.read();
    Serial.println(pwmVal);

          if(pwmVal > 1){
      digitalWrite(LED_BUILTIN, HIGH);
      } else{
      digitalWrite(LED_BUILTIN, LOW);
        }

   pwm1 = pwmVal;
   pwm2 = map(pwmVal, 0, 255, 255, 0);

   analogWrite(pin6, pwm1);
   analogWrite(pin5, pwm2);
}
