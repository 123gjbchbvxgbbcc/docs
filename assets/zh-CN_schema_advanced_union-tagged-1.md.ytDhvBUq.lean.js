import{_ as s,k as i,j as a,m as n}from"./chunks/framework.CN4YI0Ml.js";const g=JSON.parse(`{"title":"Intersect + Union：配置联动 1","description":"","frontmatter":{"layout":"schema","code":"Schema.intersect([\\n  Schema.object({\\n    enabled: Schema.boolean().default(false).description('是否开启功能'),\\n  }).description('基础配置'),\\n  Schema.union([\\n    Schema.object({\\n      enabled: Schema.const(true).required(),\\n      foo: Schema.number().description('请输入一个数值。'),\\n      bar: Schema.string().description('请输入一个字符串。'),\\n    }),\\n    Schema.object({}),\\n  ]),\\n])\\n"},"headers":[],"relativePath":"zh-CN/schema/advanced/union-tagged-1.md","filePath":"zh-CN/schema/advanced/union-tagged-1.md"}`),h={name:"zh-CN/schema/advanced/union-tagged-1.md"},e=n("",4),t=[e];function k(l,p,d,r,B,c){return a(),i("div",null,t)}const F=s(h,[["render",k]]);export{g as __pageData,F as default};
