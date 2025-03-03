/**
 * 对文段的一个简单封装
 */
 const p = (left = '', right = '') => {
    return { left, right }
 }
 /**
 * header
 * 默认将内容转为h4
 */
 const h = (left = '', right = '') => {
    return { left: `#### ${left}`, right: `#### ${right}` }
 }


/**
 * 正文部分

 * 说明：本模版在pc端和打印端采用两栏式显示，手机端采用单栏

 * 请自己判断并适应页面尺寸
 */
  export default [
    /**
     * 每一个小模块，都有以下几个配置项：
    
     * title： 顶部名称栏
    
     * content: 里面的内容，需要注意的是每一条内容都会换行
     */ 
        
    {
      title:'初试成绩',
      content: [
        p(`| 政治 | 英语（二） | 数学（二） | 数据数据工程基础 | 总分 |
        | :----: | :----------: | :----------: | :----------------: | :----: |
        | 62   | 82         | 101        | 117              | 362  |
        `)
      ]
    },
    {
      title: '主修课程',
      content: [
        p(`数据结构、计算机网络、操作系统、计算机组成原理、数据库原理、面向对象程序设计-C++、面向对象程序设计-JAVA、云计算与大数据基础、机器学习基础、大数据系统开发`)
      ]
    },
    {
          title: '工作经历',
          content: [
            h(`重庆邮电大学 · 红岩网校工作站`, `2020.6 至 2022.6`), 
            p(`*Web 研发部部长<small>（2021.6 至 2022.6）</small>* 工作站成立于 2000 年，共有成员 80 余人（Web 研发部 20+），拥有 PRD-UI-前后端开发-运营-迭代的完整开发流程。曾主持开发了后端多个完整项目，也参与上线维护、代码重构、项目迁移/部署。`),
        
            h(`重庆邮电大学 · ACM 集训队`, `2019.9 至 2021.12`),
            p('*ACM 集训队队长<small>（2021.1 至 2021.12）</small> · ACM 协会副会长<small>（2021.6 至 2022.6）* '),
            p(`负责组织集训队日常训练、比赛报名和招新活动。负责举办校程序设计大赛，宣传、报名、命题、场地申请与布置和比赛的秩序维护等环节均有参与。负责集训队与协会的经费管理。参与面向新生的算法授课。`)
          ]
        },

        {
          title: '项目经历',
          content: [
            p('- **Begonia**', '[Link](https://github.com/MashiroC/begonia)'),
            p('轻量级中心管理式或 P2P 式 RPC 框架，拥有更加友好的 API 和极高的性能，开箱即用，提供代码生成模式和反射模式。我参与完成心跳和机器监控机制，确认连接状态和获取各个节点的机器状态。'),
            
            p(`- **红岩网校后端 SDK**`),
            p('*后端负责人*'),
            p(`整合了后端开发过程中的一些标准流程代码，包含 RPC 工具、JWT 鉴权工具、加密解密工具、探针工具等。`),

            p('- **校园 APP 掌上重邮后端开发**'),
            p('*后端负责人 业务维护*'),
            p(`*总用户 53k+ 日活 5k+*`),
            p(`针对校园生活的多功能 APP，后端开发语言为 Go语言，主要负责登录、邮问、个人中心等模块，与整体业务的一些维护。使用 MariaDB、Redis 等中间价构建高性能后端。`),
            
            p('- **重邮小帮手公众号后台**'),
            p('实现了在公众号后台管理自定义菜单、设置自动回复，以及微信网页开发的授权、消息推送等功能。')
        
          ]
        },
        {
          title: '个人能力',
          content: [
            p(`- *熟悉基础算法* 熟悉二分、动态规划、数论算法、搜索算法等算法`),
            p('- *熟悉 Go 语言* 了解 Go 语言一些高级特性如 GC 机制，GPM，范型等，熟悉 Go 语言开发的常用框架，如 Gin、Gorm 等'),
            p('- *掌握多种编程语言* 掌握 C/C++、Python、Rust、JAVA 等语言的语法和基础语言特性'),
            p('- *了解计算机网络* 了解网络层，传输层。应用层常见协议如 HTTP/HTTPS、DNS 等'),
            p('- *了解操作系统* 了解内存管理如虚拟内存，内存置换的常见算法，进程调度，同步，死锁预防检测恢复'),
            p('- *了解数据库管理系统* 了解数据库管理系统的特性，如事务，MVCC，索引 B+ 树机制，简单性能优化，主从复制，读写分离等'),
            p('- *了解 Redis* 基本数据结构，持久化实现，能够利用 Redis 构建高效的 Web 应用'),
            p('- *了解 CI/CD 和 Git* 知道分支创建，提交，合并等。能使用 Git 进行简单的分支操作'),
            p('- *了解分布式系统* 了解分布式锁，如 MySQL 唯一索引，Redis 的 setnx 等，分布式的评判标准 CAP，分布式一致算法 Paxos，Raft 的思想')
          ]
        },  
        
        
        {
          title: '竞赛奖项',
          content: [
              h(`ICPC 系列竞赛`),
              p('*<small>ICPC 国际大学生程序设计竞赛（原 ACM-ICPC 竞赛），是一项旨在展示大学生创新能力、团队精神和在压力下编写程序、分析和解决问题能力的年度竞赛。经过30多年的发展，国际大学生程序设计竞赛已经发展成为最具影响力的大学生计算机竞赛。</small>*'),
              p('主要奖项：'),
              p('- ICPC 国际大学生程序设计竞赛区域赛（南京站）银牌'),
              p('- ICPC 中国邀请赛银牌'),       
              p('- CCPC 中国大学生程序设计竞赛区域赛（绵阳站）铜牌'),      
              p('- 重庆市、四川省程序设计大赛金牌（一等奖）'),
              p(''),
              h(`华为软件精英挑战赛`),
              p(`2022 华为软件精英挑战赛区预赛三等奖`)
            ]
          } ,
          {
            title: '自我评价',
            content: [
              p(`本人积极向上，品行端正，工作态度积极，乐于学习和挑战新事物、新知识。热爱科技，善于利用开源社区（Github等）学习技术、了解行业动向。代码能力优秀，大学期间开发了多个项目，参与多个科技竞赛，有丰富的源码阅读经验，阅读过 Gin、BigCache、TiDB（部分）源码。`)
            ]
          }     
      ]
    
    
