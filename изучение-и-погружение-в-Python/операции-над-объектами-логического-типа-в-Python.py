x = True
y = False

not x
False

x and y
False

x or y
True

# Python использует "ленивую" модель вычисления: если на каком-то
# этапе результат выражения известен, оно не вычисляется до конца
(4 > 5) and (5 > 2)
False
