# Python 程序设计 期中小测

**考试范围**：函数、循环与迭代、字符串、文件、列表、字典、元组、正则表达式（课件第 4–11 章）
**考试时长**：45 分钟　**闭卷**　**满分**：100 分

姓名：____________　班级：____________　学号：____________　得分：____________

| 题型 | 一 选择 | 二 判断 | 三 填空 | 四 看代码写结果 | 五 编程 |
|---|---|---|---|---|---|
| 分值 | 24 | 16 | 20 | 20 | 20 |

---

## 一、单项选择题（每题 2 分，共 24 分）

**1.**（第4章）关于函数，下列说法**正确**的是：
A. 运行 `def greet(name): ...` 这一行时，函数体中的语句会立即被执行
B. 定义函数后必须通过函数调用（如 `greet('x')`）才会执行函数体
C. 没有 `return` 语句的函数不能被调用
D. 函数的参数只能是字符串类型

**2.**（第4章）已知 `i = '42'`，执行 `print(float(i))` 输出：
A. `42`　　B. `42.0`　　C. `'42.0'`　　D. 报错 TypeError

**3.**（第5章）关于 `break` 与 `continue`，下列说法**正确**的是：
A. `continue` 会终止整个循环，执行循环后面的语句
B. `break` 只结束当前这一轮迭代，回到循环顶部继续下一轮
C. `break` 终止当前这一层循环，跳到循环紧随其后的语句；`continue` 结束本轮迭代、开始下一轮
D. 两者功能完全相同

**4.**（第5章）运行 `n = 5` 与 `while n > 0: print('Lather')`（循环体内没有修改 `n`），程序将：
A. 打印一次 Lather 后结束　　B. 进入无限循环
C. 一次都不执行循环体　　D. 语法错误

**5.**（第6、7章）关于换行符 `\n`，下列说法**正确**的是：
A. `stuff = 'X\nY'`，则 `len(stuff)` 为 4
B. 文件每行末尾不含 `\n`，只有 print 会加换行
C. `print(stuff)` 会原样显示反斜杠 n
D. `stuff = 'X\nY'`，`len(stuff)` 为 3，说明换行符虽然显示成两个符号，实际上只是一个字符

**6.**（第6章）关于字符串切片与方法，下列说法**正确**的是：
A. `s = 'Monty Python'`，`s[6:20]` 会报 IndexError，因为索引 20 超出范围
B. `'nan' in 'banana'` 的值为 True
C. `s[:2]` 得到 `'Mont'`
D. `s[0:4]` 得到 `'mont'`

**7.**（第7章）用 `for line in fhand` 逐行读取文件后直接 `print(line)`，输出行之间出现多余空行，原因是：
A. 文件中本来就有一个空行
B. print 会自动在每个字符串前添加两个换行
C. 每行读取出来时末尾自带 `\n`，print 又追加了一个换行
D. read() 方法调用后才出现空行

**8.**（第8章）关于字符串与列表，下列说法**错误**的是：
A. `t[1:3]`（t 为列表）的结果同时包含下标 1 和下标 3 的元素
B. 字符串是不可变的（immutable），列表是可变的（mutable）
C. `lotto[2] = 28` 是合法的，`fruit[0] = 'b'`（fruit 是字符串）会报错
D. `a + b`（两个列表相加）会生成一个新列表，原列表 a 不变

**9.**（第8章）运行：
```python
line = 'first;second;third'
thing = line.split()
print(len(thing))
thing = line.split(';')
print(len(thing))
```
输出是：
A. `3` 和 `3`　　B. `1` 和 `3`　　C. `3` 和 `1`　　D. 报错

**10.**（第9章）关于字典，下列说法**错误**的是：
A. 引用不存在的键（如 `ccc['csev']`）会导致 Traceback（KeyError），可用 `in` 先做判断
B. `d.get(key, 0)` 在 key 不存在时返回默认值 0 而不报错
C. `jjj['chuck']` 用键 'chuck' 查找对应的值；而 `len(jjj)` 返回的是键值对个数，因此一个含 3 个键值对的字典长度为 6
D. Python 3.7+ 的字典保持元素的插入顺序，但插入顺序不等于按键排序

**11.**（第10章）关于元组（tuple），下列说法**正确**的是：
A. `x = (3, 2, 1)` 之后可以用 `x.sort()` 把 x 变成 `(1, 2, 3)`
B. 元组与列表类似、下标从 0 开始，但元组不可变；`dir(tuple())` 只有 count 和 index 两个方法，没有 append/sort，因此做临时变量时元组比列表更高效
C. `y = (5, 4, 3)`，`y[2] = 0` 是合法操作
D. `(x, y) = (4, 'fred')` 是语法错误

**12.**（第11章）运行：
```python
import re
print(re.findall('^F.+?:', 'From: Using the : character'))
```
输出是：
A. `['From:']`　　B. `['From: Using the :']`　　C. `['F']`　　D. `[]`

---

## 二、判断题（每题 2 分，共 16 分。正确画 √，错误画 ×）

**13.**（第4章）`def` 定义函数后立即执行函数体中的代码。

**14.**（第9章）要用字典中可能不存在的 key 取值，直接 `jjj['mitch']` 会引发 Traceback；应先用 `if 'mitch' in jjj` 判断，或用 `jjj.get('mitch', 0)` 避免报错。

**15.**（第6、8章）字符串和列表都是可变类型，因此都可以像 `s[0] = 'X'` 这样修改其中的单个元素。

**16.**（第8章）列表方法 `sort()` 是"就地排序"（改变自己），不同于字符串 `lower()` 返回新串的做法。

**17.**（第5章）`for` 循环被称为"确定循环（definite loop）"，因为它会遍历集合（序列）中的每一个成员，执行次数由成员个数决定。

**18.**（第5章）仿照求最大值的写法用 `smallest = -1` 初始化再求最小值，当序列中全部是正数时，循环结束后 `smallest` 的结果仍是 -1。

**19.**（第11章）`re.findall('[AEIOU]+', 'My 2 favorite numbers are 19 and 42')` 返回空列表 `[]`，是因为该字符串中没有任何元音字母。

**20.**（第11章）`re.search('From:', line)` 的作用与 `line.find('From:') >= 0` 类似，都是判断字符串是否匹配（包含）某模式。

---

## 三、填空题（每空 2 分，共 20 分）

**21.**（第4、5章）① Python 中用关键字 __________ 定义自己的函数；② 循环中 __________ 语句用于终止整个循环，③ __________ 语句用于跳过本轮迭代、直接进入下一轮；④ 在求"最小值"的循环模式中，常用 `smallest = __________` 初始化，以便第一次进入循环时直接取第一个值。

**22.**（第6、9章）① 获取字符串长度的内置函数是 __________；② 从字典中安全取某个 key 对应的值、key 不存在时返回默认值而不报错，应使用字典的 __________ 方法。

**23.**（第5、8章）① `for i in [5, 4, 3, 2, 1]: print(i)` 的循环体被执行 __________ 次；② `print(sum([3, 41, 12, 9, 74, 15]))` 输出 __________。

**24.**（第7章）`handle = open(filename, mode)` 中，若以只读方式使用文件，mode 为 __________；若要写文件，则 mode 为 __________。

---

## 四、看代码写结果（每题 5 分，共 20 分）

**25.**（第4章）写出运行结果：
```python
def thing():
    print('Hello')
    print('Fun')

thing()
print('Zip')
thing()
```

**26.**（第5章）写出运行结果：
```python
smallest = None
for value in [9, 41, 12, 3, 74, 15]:
    if smallest is None:
        smallest = value
    elif value < smallest:
        smallest = value
    print(smallest, value)

print('After', smallest)
```

**27.**（第6、8章）写出运行结果（一行输出占一行）：
```python
fruit = 'banana'
print(fruit[2:])

t = [9, 41, 12, 3, 74, 15]
print(t[:4])
print(len(t))
print(sum(t) / len(t))

words = 'first;second;third'.split(';')
print(len(words))
print(words[1])
```

**28.**（第9、11章）写出输出结果：
```python
import re
counts = dict()
for word in ['csev', 'cwen', 'csev', 'zqian', 'cwen']:
    counts[word] = counts.get(word, 0) + 1
print(counts)

print(re.findall('^F.+:', 'From: Using the : character'))
```

---

## 五、编程题（共 20 分）

**29.（8 分，第4、5章）** 编写一个计算工资的函数 `computepay(hours, rate)`：每周工时超过 40 小时的部分，报酬按超出的小时乘以"1.5 倍时薪"计算，未超过部分按时薪计算。主程序输入 hours 和 rate（均按数值处理），调用 `computepay` 并打印结果。
示例：输入 45 小时、10 元/小时，输出 `Pay: 475.0`。

**30.（12 分，第7、8、9章）** 编写程序完成以下功能：
① 提示用户输入文件名（`input('Enter file:')`）并打开该文本文件；
② 逐行读取文件，将每行拆分为单词，用字典统计每个单词出现的次数（要求使用 `get()` 的默认值写法，而不是先判断 key 是否存在）；
③ 遍历统计结果，找出出现次数最多的单词及其次数并打印（提示：用 `bigcount`、`bigword` 两个变量在循环中跟踪最大值）。

---
---

# 参考答案及评分说明

## 一、单项选择题（每题 2 分）

| 题号 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 答案 | B | B | C | B | D | B | C | A | B | C | B | A |

- 第 1 题：definition（定义）与 use（调用）分离，def 执行时不运行函数体。
- 第 2 题：`float('42')` → `42.0`；字符串型数字要先转换。
- 第 5 题：'X\nY' 长度为 3（换行符是一个字符）。
- 第 6 题：切片"包含开头、不包含结尾"；`s[6:20]` 超出部分自动截断到结尾得 'Python'，不报错；`s[:2]`='Mo'；A/C/D 均错。
- 第 8 题：A 错误——与字符串切片规则相同，列表切片"包含开头、不包含结尾"，`t[1:3]` 只含下标 1、2 的元素（即 [41, 12]），不含下标 3。
- 第 9 题：`split()` 不带分隔符时把连续多个空格当**一个**分隔符处理，而 `'first;second;third'` 中没有空格，故第一次 `len(thing)` 为 **1**，第二次为 3。
- 第 10 题：C 错误——含 3 个键值对的字典 `len()` 为 3（数的是键值对个数，不是键与值的总个数）。
- 第 11 题：元组不可变（选项 A 错，tuple 没有 sort/append/reverse 方法，A 中 `x.sort()` 会引发 AttributeError；选项 B 正确），元组比列表更高效，因此适合做临时变量。
- 第 12 题：`?` 使重复变为非贪婪（non-greedy），只匹到第一个冒号。

## 二、判断题（每题 2 分）

13. **×**　14. **√**　15. **×**　16. **√**　17. **√**　18. **√**　19. **×**　20. **√**

- 13：def 只是"存储"步骤，不调用就不执行。
- 15：字符串不可变（`TypeError: 'str' object does not support item assignment`），列表才可变。
- 18：最小值若用 -1 初始化且全为正数，条件永远不成立，结果停在 -1——这正是改用 `None` 的原因。
- 19：字符串中含小写元音，正则区分大小写，匹配的是大写 AEIOU，因此 `[]`，原因是**区分大小写**而非"没有元音"。

## 三、填空题（每空 2 分）

21. ① `def`　② `break`　③ `continue`　④ `None`
22. ① `len()`　② `get()`
23. ① 5 次　② 154
24. ① `'r'`　② `'w'`

## 四、看代码写结果（每题 5 分）

**25.**（每答对 3 行给 3 分，全对 5 分）
```
Hello
Fun
Zip
Hello
Fun
```

**26.**
```
9 9
9 41
9 12
3 3
3 74
3 15
After 3
```

**27.**
```
nana
[9, 41, 12, 3]
6
25.666666666666668
3
second
```
（平均数写 25.6667 以上近似值均可给分；Python 3 中 `/` 为浮点除法）

**28.**
```
{'csev': 2, 'cwen': 2, 'zqian': 1}
['From: Using the :']
```
（字典输出顺序与插入顺序一致即可；第二问是**贪婪**匹配：`*`/`+` 会尽量向外扩，匹到最后一个冒号）

## 五、编程题

**29.（8 分）**

```python
def computepay(hours, rate):
    if hours > 40:
        pay = rate * 40 + (hours - 40) * rate * 1.5
    else:
        pay = hours * rate
    return pay

h = float(input('Enter Hours: '))
r = float(input('Enter Rate: '))
print('Pay:', computepay(h, r))
```

评分：函数定义与参数 2 分；加班费计算逻辑 3 分；return 返回 1 分；输入转换 + 调用输出 2 分（hours=45, rate=10 应得 475.0）。

**30.（12 分）**

```python
fname = input('Enter file:')
fhand = open(fname)
counts = dict()
for line in fhand:
    words = line.split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

bigcount = None
bigword = None
for word, count in counts.items():
    if bigcount is None or count > bigcount:
        bigword = word
        bigcount = count

print(bigword, bigcount)
```

评分：打开文件并逐行读取 2 分；`split()` 拆词 + 嵌套循环遍历单词 3 分；`get(word, 0) + 1` 计数 3 分；`items()` 双变量遍历 2 分；跟踪最大值（用 `is None` 处理第一轮）2 分。

> 出题依据：全部题目均出自所上传课件（第 4–11 章）的课堂示例与课后练习模式；代码题答案均已在 Python 3 环境实测验证。
