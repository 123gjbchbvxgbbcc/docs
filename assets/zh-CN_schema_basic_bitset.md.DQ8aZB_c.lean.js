import{_ as s,k as i,j as a,m as n}from"./chunks/framework.CN4YI0Ml.js";const g=JSON.parse(`{"title":"位集 (Bitset)","description":"","frontmatter":{"layout":"schema","code":"Schema.intersect([\\n  Schema.object({\\n    bitset: Schema\\n      .bitset({ FOO: 1, BAR: 2, QUX: 4 })\\n      .default(5)\\n      .description('选择要启用的功能。'),\\n    array: Schema\\n      .array(Schema.union(['FOO', 'BAR', 'QUX']))\\n      .default(['FOO', 'QUX'])\\n      .role('checkbox')\\n      .description('以复选框形式呈现。'),\\n  }).description('复选框'),\\n  Schema.object({\\n    bitset: Schema\\n      .bitset({ FOO: 1, BAR: 2, QUX: 4 })\\n      .default(5)\\n      .role('select')\\n      .description('选择要启用的功能。'),\\n    array: Schema\\n      .array(Schema.union(['FOO', 'BAR', 'QUX']))\\n      .default(['FOO', 'QUX'])\\n      .role('select')\\n      .description('以复选菜单形式呈现。'),\\n  }).description('复选菜单'),\\n])\\n"},"headers":[],"relativePath":"zh-CN/schema/basic/bitset.md","filePath":"zh-CN/schema/basic/bitset.md"}`),h={name:"zh-CN/schema/basic/bitset.md"},t=n("",5),k=[t];function e(l,p,r,d,B,c){return a(),i("div",null,k)}const o=s(h,[["render",e]]);export{g as __pageData,o as default};
