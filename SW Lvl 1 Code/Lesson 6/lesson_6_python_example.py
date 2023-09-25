# Hello this is Python file that contains examples of Python code.
'''
Follow these links to view more Python examples:
1. https://towardsdatascience.com/python-for-beginners-functions-2e4534f0ae9d
2. https://www.learnpython.org/en/Functions
3. https://www.datacamp.com/community/tutorials/functions-python-tutorial
4. https://www.learnpython.org/en/Loops

'''
# ----------------------------------------------------------------------------
###### This section is about adding numbers with variables ###################


# Adding numbers using variables
x = 1
y = 2
sum = x + y
dif = y - x

print(sum)
print(dif)

# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
###### This section is about printing ########################################

print("Hello this is a string")
print('This is also a string')
message = 'Please wait while the program is loading...'
print(message)

print('My age is ' + str(42))
print(42)

print('line1\nline2\nline3')


print('Printing in a Nutshell', end='\n * ')
print('Calling Print', end='\n * ')
print('Separating Multiple Arguments', end='\n * ')
print('Preventing Line Breaks')
# ----------------------------------------------------------------------------


# ----------------------------------------------------------------------------
###### This section is collects infromation from the user and conducts math ##

# Taking kilometers input from the user
kilometers = float(input("Enter value in kilometers: "))

# conversion factor
conv_fac = 0.621371

# calculate miles
miles = kilometers * conv_fac
print('%0.2f kilometers is equal to %0.2f miles' %(kilometers,miles))
# ----------------------------------------------------------------------------



# Program to find the sum of all numbers stored in a list

# List of numbers
numbers = [6, 5, 3, 8, 4, 2, 5, 4, 11]

# variable to store the sum
sum = 0

# iterate over the list
for val in numbers:
    sum = sum+val

print("The sum is", sum)

# ----------------------------------------------------------------------------

# Program to iterate through a list using indexing

genre = ['pop', 'rock', 'jazz']

# iterate over the list using index
for i in range(len(genre)):
    print("I like", genre[i])

# ----------------------------------------------------------------------------