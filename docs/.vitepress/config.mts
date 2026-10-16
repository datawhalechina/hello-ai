import { defineConfig } from 'vitepress'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
// https://vitepress.dev/reference/site-config

// 1. 获取环境变量并判断
// 如果环境变量 EDGEONE 等于 '1'，说明在 EdgeOne 环境，使用根路径 '/'
// 否则默认是 GitHub Pages 环境，使用仓库子路径 '/hello-ai/'
const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/hello-ai/'


// Source Markdown uses relative paths so images and downloads work on GitHub.
// VitePress serves public files from the site root; attachments are downloads.
function courseAssets(md: any) {
  for (const [rule, attribute] of [['link_open', 'href'], ['image', 'src']]) {
    const original = md.renderer.rules[rule]
    md.renderer.rules[rule] = (tokens: any[], index: number, options: any, env: any, self: any) => {
      const token = tokens[index]
      const value = token.attrGet(attribute) || ''
      const prefix = '../../public/course-assets/'
      if (value.startsWith(prefix)) {
        const relative = 'course-assets/' + decodeURIComponent(value.slice(prefix.length))
        const file = fileURLToPath(new URL('../public/' + relative, import.meta.url))
        if (!existsSync(file)) throw new Error('Missing course resource: ' + relative)
        if (rule === 'link_open') {
          token.attrSet('download', '')
          token.attrSet('href', baseConfig + relative)
        } else {
          token.attrSet('src', '/' + relative)
        }
      }
      return original ? original(tokens, index, options, env, self) : self.renderToken(tokens, index, options)
    }
  }
}

export default defineConfig({
  lang: 'zh-CN',
  srcExclude: ['public/**'],
  title: "AI新手村",
  description: "36 门 AI 入门课，从真实场景开始动手实践",
  base: baseConfig,
  markdown: {
    math: true,
    config: courseAssets
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/datawhale-logo.png',
    nav: [
      { text: '课程目录', link: '/courses/' },
      { text: '官网学习', link: 'https://www.datawhale.cn/learn/summary/382' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    sidebar: [
  {
    "text": "办公提效",
    "collapsed": false,
    "items": [
      {
        "text": "AI辅助文档写作",
        "link": "/courses/01/"
      },
      {
        "text": "辅助PPT与演示",
        "link": "/courses/02/"
      },
      {
        "text": "表格数据分析",
        "link": "/courses/03/"
      },
      {
        "text": "会议纪要自动化",
        "link": "/courses/04/"
      },
      {
        "text": "信息检索与整理",
        "link": "/courses/05/"
      },
      {
        "text": "AI辅助撰写保研考研邮件",
        "link": "/courses/06/"
      },
      {
        "text": "用 AI 整理文件",
        "link": "/courses/28/"
      },
      {
        "text": "日程管理 一键导入课程文件",
        "link": "/courses/29/"
      }
    ]
  },
  {
    "text": "编程开发",
    "collapsed": false,
    "items": [
      {
        "text": "AI编程快速入门",
        "link": "/courses/07/"
      },
      {
        "text": "应用快速开发",
        "link": "/courses/08/"
      },
      {
        "text": "智能体与自动化搭建",
        "link": "/courses/09/"
      },
      {
        "text": "工作流自动化设计",
        "link": "/courses/10/"
      }
    ]
  },
  {
    "text": "内容创作",
    "collapsed": false,
    "items": [
      {
        "text": "如何写好AI提示词",
        "link": "/courses/11/"
      },
      {
        "text": "AI辅助写作全流程",
        "link": "/courses/12/"
      },
      {
        "text": "短视频策划与AI制作",
        "link": "/courses/13/"
      },
      {
        "text": "个人品牌与数字名片",
        "link": "/courses/15/"
      },
      {
        "text": "AI绘图/图像生成",
        "link": "/courses/30/"
      },
      {
        "text": "视频生产：把拍过的素材更快变成可发布的视频",
        "link": "/courses/31/"
      },
      {
        "text": "选题发现：自动检索热点并找到值得做的选题",
        "link": "/courses/33/"
      },
      {
        "text": "文案改写：一份素材，写成三个平台的内容",
        "link": "/courses/34/"
      },
      {
        "text": "素材管理：把散落的自媒体素材整理成素材库",
        "link": "/courses/35/"
      }
    ]
  },
  {
    "text": "数据智能",
    "collapsed": false,
    "items": [
      {
        "text": "数据叙事与可视化",
        "link": "/courses/14/"
      },
      {
        "text": "数据分析与洞察",
        "link": "/courses/16/"
      },
      {
        "text": "数据复盘：小红书账号数据分析",
        "link": "/courses/32/"
      },
      {
        "text": "依据个人账单生成财务分析报告",
        "link": "/courses/36/"
      }
    ]
  },
  {
    "text": "学习与协作",
    "collapsed": false,
    "items": [
      {
        "text": "用AI管理系统化学习笔记",
        "link": "/courses/17/"
      },
      {
        "text": "AI 时代的信息辨别与独立判断",
        "link": "/courses/18/"
      },
      {
        "text": "用AI管理碎片化知识",
        "link": "/courses/22/"
      },
      {
        "text": "做社团活动策划方案",
        "link": "/courses/25/"
      },
      {
        "text": "AI备考小测",
        "link": "/courses/26/"
      }
    ]
  },
  {
    "text": "科研与求职",
    "collapsed": false,
    "items": [
      {
        "text": "AI for Science入门",
        "link": "/courses/19/"
      },
      {
        "text": "学术写作与论文辅助",
        "link": "/courses/20/"
      },
      {
        "text": "用户研究与需求验证",
        "link": "/courses/21/"
      },
      {
        "text": "使用AI辅助制作简历",
        "link": "/courses/23/"
      },
      {
        "text": "AI辅助设计问卷",
        "link": "/courses/24/"
      },
      {
        "text": "AI 准备面试",
        "link": "/courses/27/"
      }
    ]
  }
],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/datawhalechina/hello-ai' }
    ],

    editLink: {
      pattern: 'https://github.com/datawhalechina/hello-ai/blob/main/docs/:path'
    },

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2026002630号-1</a> | <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010602202215" rel="noreferrer" target="_blank">京公网安备11010602202215号</a>',
      copyright: '本作品采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）</a> 进行许可'
    }
  }
})
