
#nested loop
for i in range(7):
    for j in range(7):
        print(str(i)+str(j))

#list comprehension
[str(i) + " / " + str(j) for i in range(6) for j in range(6)]

['<td id="'+str(i)+str(j)+'"></td>' for i in range(6) for j in range(6)]
#need to find a way to get single quotes out of result
