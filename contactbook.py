from collections import defaultdict
name=""
i=0
d=defaultdict(list)
while True:
    print("_________________________________________________")
    print("@@@@@@@WELCOME TO SG CONTACT BOOK@@@@@@@")
    print("1.Add new Contact")
    print("2.Show all contacts")
    print("3.Search a Contact")
    print("4.Modify existing Contact")
    print("_________________________________________________")
    choice=int(input("---->Which one do you want?(1/2/3/4)::::"))
    if choice==1:
        print("_________________________________________________")
        name=input("--->Enter full name of person:")
        mn=input("--->Enter contact of person:")
        d[i].append(name)
        d[i].append(mn)
        c=input("--->Enter 'yes/no' if you want to add additional information:")
        if c=='yes' :
            ai=input("--->Enter additional information:")
            d[i].append(ai)
        else:
            print("@@No additional is information is given@@")
            d[i].append("")
        print("@@@@Contact is added@@@@.")
        i=i+1
        print("_________________________________________________")
    elif choice==2:
        print("_________________________________________________")
        if i==0:
            print("@@@@@@Hey...Contact Book is Empty!@@@@@@@")
            continue
        print("Contact list:")
        for j in range(0,i):
            print("**********************************************")
            print(j+1,") N@me::",d[j][0])
            print("Number::",d[j][1])
            if d[j][2]!="":
                print("Info::",d[j][2])
        print("**********************************************")
    elif choice==3:
        if i==0:
            print("@@@@@@@Hey..Contact Book is Empty!@@@@@@@")
        else:
            print("_________________________________________________")
            print("1.Search by name")
            print("2.Search by number")
            print("_________________________________________________")
            ch=int(input("--->Enter Search choice:"))
            print("_________________________________________________")
            if ch==1:
                s1=input("--->Enter the name of searching person:")
                for k in range(0,i):
                    if d[k][0]==s1:
                        print("_________________________________________________")
                        print("@@Found the contact@@")
                        print("Name of Search:",d[k][0])
                        print("Contact of Search:",d[k][1])
                        print("Additional info:",d[k][2])
                        break
                    if k==i-1:
                        print("_________________________________________________")
                        print("@@@Not found@@@")
                        print("_________________________________________________")

            if ch==2:
                print("_________________________________________________")
                s2=input("--->Enter number of searching person:")
                for l in range(0,i):
                    if d[l][1]==s2:
                        print("_________________________________________________")
                        print("@@Found the contact@@")
                        print("Name of Search:",d[l][0])
                        print("Contact of Search:",d[l][1])
                        print("Additional info:",d[k][2])
                        print("_________________________________________________")

                    else:
                        print("_________________________________________________")
                        print("@@@Not found@@@")
                        print("_________________________________________________")
    elif choice==4:
        print("_________________________________________________")
        if i==0:
            print("@@@@Hey..Contact list is Empty!!!@@@@@")
            continue
        print("_________________________________________________")
        print("_________________________________________________")
        print("Modification is for:")
        print("1.Name")
        print("2.Contact")
        cho=int(input("--->Enter modification choice:"))
        if cho==1:
            print("--->Enter name of contact to be modified:")
            namemod=input()
            for k in range(0,i):
                if d[k][0]==namemod:
                    print("_________________________________________________")
                    print("@@Searching for name....@@")
                    newname=input("--->Enter new name to the contact:")
                    d[k][0]=newname
                    print("New name after modification:",d[k][0])
                    print("Contact:",d[k][1])
                    print("Additional info:",d[k][2])
                    break
                else:
                    print("_________________________________________________")
                    print("@@Not found@@")
                    print("_________________________________________________")
        if cho==2:
            print("--->Enter number contact to be modified:")
            nummod=input()
            for k in range(0,i):
                if d[k][1]==nummod:
                    print("_________________________________________________")
                    print("@@Searching for number....@@")
                    newnum=input("--->Enter new name to the contact:")
                    d[k][1]=newnum
                    print("Contact after modification:",d[k][1])
                    print("Name of Contact:",d[k][0])
                    print("Additional info:",d[k][2])
                    break
                else:
                    print("_________________________________________________")
                    print("@@@Not found@@@")
                    print("_________________________________________________")



                        
