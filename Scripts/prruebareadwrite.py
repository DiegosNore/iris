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
        print(i+':'+str(i.isalnum()))
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
    tmp=arc.readline()
    #print(tmp.isspace())
    if tmp == '':
        break
    #arc.write(tmp)
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

#def probabilidad
