
#nested loop
for i in range(7):
    for j in range(7):
        print(str(i)+str(j))

#list comprehension
[str(i) + " / " + str(j) for i in range(6) for j in range(6)]
