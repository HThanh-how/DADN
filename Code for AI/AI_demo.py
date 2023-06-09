print("Hello AI")
from keras.models import load_model
from PIL import Image, ImageOps
import numpy as np
import cv2

# CAMERA can be 0 or 1 based on default camera of your computer.
camera = cv2.VideoCapture(0)

# Load the model
model = load_model('keras_model.h5', compile=False)

def image_capture():
    ret, frame = camera.read()
    cv2.imwrite("input.png", frame)

def image_detector():
    # Create the array of the right shape to feed into the keras model
    # The 'length' or number of images you can put into the array is
    # determined by the first position in the shape tuple, in this case 1.
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    # Replace this with the path to your image
    image = Image.open('input.png').convert('RGB')
    #resize the image to a 224x224 with the same strategy as in TM2:
    #resizing the image to be at least 224x224 and then cropping from the center
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.ANTIALIAS)

    #turn the image into a numpy array
    image_array = np.asarray(image)
    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1
    # Load the image into the array
    data[0] = normalized_image_array

    # run the inference
    prediction = model.predict(data)
    print(prediction)

    output = prediction[0]
    max_index = 0
    max_confidence = output[0]
    #find the maximum confidence and its index
    for i in range(1, len(output)):
        if max_confidence < output[i]:
            max_confidence = output[i]
            max_index = i
    print('Class:', max_index, end='')
    print('\nConfidence score:', max_confidence)

    file = open("labels.txt", encoding="utf8")
    data = file.read().split("\n")
    file.close()
    print("AI Result: ", data[max_index])
    return data[max_index]
