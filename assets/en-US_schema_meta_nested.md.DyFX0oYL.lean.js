import{_ as s,k as i,j as a,m as n}from"./chunks/framework.CN4YI0Ml.js";const E=JSON.parse(`{"title":"Nested Type","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.object({\\nbar: Schema.array(\\nSchema.object({\\nbaz: Schema.number().required().description('在右侧填写数值。'),\\n}).description('这是数组的元素，它本身又是一个对象。'),\\n).default([{ baz: 114514 }]).description('这是一个嵌套属性，类型为数组。'),\\nqux: Schema.dict(\\nSchema.string().required().description('在右侧填写字符串。'),\\n).default({ welcome: 'Hello World' }).description('这是一个嵌套属性，类型为字典。'),\\n}),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"en-US/schema/meta/nested.md","filePath":"en-US/schema/meta/nested.md"}`),e={name:"en-US/schema/meta/nested.md"},h=n("",4),t=[h];function l(k,p,r,d,B,c){return a(),i("div",null,t)}const y=s(e,[["render",l]]);export{E as __pageData,y as default};
