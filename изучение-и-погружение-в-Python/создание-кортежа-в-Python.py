# 1. Пустой кортеж создается с помощью пустых круглых скобок
# или функции tuple()
()
()
tuple()
()

# 2. Инициализировать кортеж элементами можно одним из следующих способов:
1,
(1,)
1, 2, "text"
(1, 2, 'text')
s = tuple("text")
s
('t', 'e', 'x', 't')
# >>>

# 3. Т.к. структура является неизменяемой, изменение содержимого запрещено
s[0] = "n"
# Traceback (most recent call last):
#  File "<stdin>", line 1, in <module>
# TypeError: 'tuple' object does not support item assignment
