### BFC 机制

BFC(Block Formatting Context)，块级格式化上下文  
是一个独立的布局环境，其中的元素布局是不受外界的影响

#### 触发条件(其一)

- float 的值不为 none overflow 的值不为 visible
- display 的值为 table-cell、tabble-caption 和 inline-block 之一
- position 的值不为 static 或则 releative 中的任何一个
