#copyfile()=copies contents of a file.

#copy()=copyfile()+permission mode + destination can be a directory.

#copy2()=copy()+copies metadata(file's creation and modification times);



import shutil
# print(help(shutil))
src="C:\\Users\\ACER\\Desktop\\commands\\new.txt"
des="C:\\Users\\ACER\\Desktop\\commands\\copy.txt"

shutil.copyfile(src,des) #src,dest

