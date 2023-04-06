import random
import time
import sys
from Adafruit_IO import MQTTClient
from AI_demo import *

AIO_FEED_ID = ["v10"]
AIO_USERNAME = "HCMUT_IOT"
AIO_KEY = "aio_XTyq67VDg7YwxsD9u99ZDGmCowiU"

def connected(client):
    print("Ket noi thanh cong ...")
    for id in AIO_FEED_ID:
        client.subscribe(id)

def subscribe(client , userdata , mid , granted_qos):
    print("Subscribe thanh cong ...")

def disconnected(client):
    print("Ngat ket noi ...")
    sys.exit(1)

def message(client , feed_id , payload):
    print("Data is from: " + payload + ", Feed_id: " + feed_id)

client = MQTTClient(AIO_USERNAME , AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()

#declare the var
counter_ai = 5
ai_result = ""
previous_result = ""

while True:
    time.sleep(1)
    counter_ai = counter_ai - 1
    # if counter == 0:
    #     counter = 10
    #     if temp == 1:
    #         temp = random.randint(20,40)
    #         client.publish("v1", temp)
    #         print("Temperture: ", temp)
    #         temp = 2
    #     elif temp == 2:
    #         lux = random.randint(0, 100)
    #         client.publish("v3", lux)
    #         print("Light: ", lux)
    #         temp = 3
    #     else:
    #         humid = random.randint(0, 400)
    #         client.publish("v2", humid)
    #         print("Moisture: ", humid)
    #         temp = 1
    if counter_ai == 0:
        counter_ai = 5
        image_capture()
        previous_result = ai_result
        ai_result = image_detector()
        if previous_result != ai_result:
            client.publish("v14", ai_result)

