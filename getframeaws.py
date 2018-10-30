import cv2
import numpy as np
import os
import boto3
import sys

def porcentaje():
    arc = open('out.json', 'r+')
    tmp = arc.readline()
    conthappy = 0
    contsad = 0
    contangry = 0
    contconfused = 0
    contdisgusted = 0
    contsurprised = 0
    contcalm = 0
    contunknown = 0
    contgeneral = 0
    wr = open('porcentaje.json', 'w+')
    while True:
        tmp= tmp.replace('{',"")
        tmp = tmp.replace('}',"")
        tmp = tmp.replace('[',"")
        tmp = tmp.replace(']',"")
        tmp = tmp.replace("'","")
        tmp = tmp.replace('Type',"")
        tmp = tmp.replace('Confidence',"")
        tmp = tmp.replace(':',"")
        tmp = tmp.replace(' ',"")
        temp = tmp.split(',')
        for i in temp:
            if(i.isalnum()):
                if i=='HAPPY':
                    conthappy+=1
                    contgeneral+=1
                elif i == 'SAD':
                    contsad+=1
                    contgeneral+=1
                elif i == 'ANGRY':
                    contangry+=1
                    contgeneral+=1
                elif i == 'CONFUSED':
                    contconfused+=1
                    contgeneral+=1
                elif i == 'DISGUSTED':
                    contdisgusted+=1
                    contgeneral+=1
                elif i == 'SURPRISED':
                    contsurprised+=1
                    contgeneral+=1
                elif i == 'CALM':
                    contcalm+=1
                    contgeneral+=1
                elif i == 'UNKNOWN':
                    contunknown+=1
                    contgeneral+=1
        tmp = arc.readline()
        #print(tmp.isspace())
        if tmp == '':
            break
    wr.write('HAPPY:'+str(conthappy/contgeneral)+'\n')
    wr.write('SAD:'+str(contsad/contgeneral)+'\n')
    wr.write('ANGRY:'+str(contangry/contgeneral)+'\n')
    wr.write('CONFUSED:'+str(contconfused/contgeneral)+'\n')
    wr.write('DISGUSTED:'+str(contdisgusted/contgeneral)+'\n')
    wr.write('SURPRISED:'+str(contsurprised/contgeneral)+'\n')
    wr.write('CALM:'+str(contcalm/contgeneral)+'\n')
    wr.write('UNKNOWN:'+str(contunknown/contgeneral)+'\n')
    arc.close()
    wr.close()

#vc = cv2.VideoCapture('video.mp4')
vc = cv2.VideoCapture(sys.argv[1])
c = 1
client=boto3.client('rekognition')

c2 = 1

if vc.isOpened():
    rval, frame = vc.read()
else:
    rval = False

archivo = open('out.json','w+')
while rval:
    rval, frame = vc.read()

    if(c%10==0):
        cv2.imwrite(str(c) + '.jpg', frame)
        imageFile=str(c)+'.jpg'
        with open(imageFile, 'rb') as image:
            response = client.detect_faces(Image={'Bytes': image.read()},Attributes=['ALL'])

        for label in response['FaceDetails']:
            archivo.write(str(label['Emotions'])+"\n")
            #print(label['Emotions'])
        os.remove(str(c)+'.jpg')
    c+=1
    cv2.waitKey(10)

    if 0xFF == ord('q'):
     breakpoint()
#estadistica()
archivo.close()
vc.release()
cv2.destroyAllWindows()
porcentaje()
