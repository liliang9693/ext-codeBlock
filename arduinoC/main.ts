
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace CodeBlock {
    //% block="#include <[STR]>"  blockType="command"
    //% STR.shadow="string" STR.defl="Test.h"
    export function include(parameter:any){
        let str=parameter.STR.code;
        if(str.substring(0,1)=="\"")  str=str.substring(1,str.length-1);
        Generator.addInclude(`CodeBlockInclude${str}`,`#include <${str}>`);

        
    }
    //% block="#define [STR]"  blockType="command"
    //% STR.shadow="string" STR.defl="MYDEFINE MDF"
    export function define(parameter:any){
        let str=parameter.STR.code;
        if(str.substring(0,1)=="\"")  str=str.substring(1,str.length-1);
        Generator.addInclude(`CodeBlockDefine${str}`,`#define ${str}`);

        
    }
    //% block="[STR]"  blockType="command"
    //% STR.shadow="string" STR.defl="//#define include any"
    export function defineAny(parameter:any){
        let str=parameter.STR.code;
        if(str.substring(0,1)=="\"")  str=str.substring(1,str.length-1);
        Generator.addInclude(`CodeBlockDefineAny${str}`,`${str}`);

        
    }
  
    //% block="[OBJ] [OBJNAME];"   blockType="command"
    //% OBJ.shadow="string" OBJ.defl="Test"
    //% OBJNAME.shadow="string" OBJNAME.defl="test"
    export function object(parameter:any){
        let obj=parameter.OBJ.code;
        let name=parameter.OBJNAME.code;

        if(obj.substring(0,1)=="\"")  obj=obj.substring(1,obj.length-1);
        if(name.substring(0,1)=="\"")  name=name.substring(1,name.length-1);
 
        Generator.addObject(`CodeBlockObject${obj}${name}`,`${obj}`,`${name}`);

        
    }


    //% block="[OBJ]"   blockType="command"
    //% OBJ.shadow="string" OBJ.defl="//object any"

    export function objectAny(parameter:any){
        let obj=parameter.OBJ.code;

        if(obj.substring(0,1)=="\"")  obj=obj.substring(1,obj.length-1);

 
        Generator.addObject(`CodeBlockObjectAny${obj}`," ",`${obj}`);

        
    }

    //% block="setUp:[SETUP]"   blockType="command"
    //% SETUP.shadow="string" SETUP.defl="//setup any;"

    export function setupAny(parameter:any){
        let code=parameter.SETUP.code;

        if(code.substring(0,1)=="\"")  code=code.substring(1,code.length-1);

 
        Generator.addSetup(`CodeBlockSetupAny${code}`,` ${code}`,``);

        
    }
    //% block="Code:[CODE];"   blockType="command"
    //% CODE.shadow="string" CODE.defl="//code any"

    export function codeAny(parameter:any){
        let code=parameter.CODE.code;
    
        if(code.substring(0,1)=="\"") code=code.substring(1,code.length-1);

 
        Generator.addCode(`${code};`);

        
    }
    
    //% block="Code:[CODE]"   blockType="reporter"
    //% CODE.shadow="string" CODE.defl="/*code any*/"

    export function codeAnyRp(parameter:any){
        let code=parameter.CODE.code;
    
        if(code.substring(0,1)=="\"") code=code.substring(1,code.length-1);

 
        Generator.addCode([`${code}`, Generator.ORDER_UNARY_POSTFIX]);

        
    }
    //% block="function Declare: [OUTPUT] [FUNCTION]([INPUT]){[CODE]}" blockType="command"
    //% OUTPUT.shadow="string" OUTPUT.defl="float"
    //% FUNCTION.shadow="string" FUNCTION.defl="functionName"
    //% INPUT.shadow="string" INPUT.defl="float varf,float vars"
    //% CODE.shadow="string" CODE.defl="return varf+vars;"
    export function functionDeclare(parameter:any){
        let out=parameter.OUTPUT.code;
        let fct=parameter.FUNCTION.code;
        let input=parameter.INPUT.code;
        let cd=parameter.CODE.code;

        if(out.substring(0,1)=="\"")  out=out.substring(1,out.length-1);
        if(fct.substring(0,1)=="\"")  fct=fct.substring(1,fct.length-1);
        if(input.substring(0,1)=="\"")  input=input.substring(1,input.length-1);
        if(cd.substring(0,1)=="\"")  cd=cd.substring(1,cd.length-1);

        Generator.addObject(`CodeBlockFunctionDeclare${fct}`,`${out}`,`${fct}(${input}){${cd}}`);    
    }


    //% block="Function call with return value: [FUNCTION]([INPUT])" blockType="reporter"
    //% FUNCTION.shadow="string" FUNCTION.defl="functionName"
    //% INPUT.shadow="string" INPUT.defl="1,1"
    export function functionWithReturn(parameter:any){
        let fct=parameter.FUNCTION.code;
        let input=parameter.INPUT.code;

        if(fct.substring(0,1)=="\"")  fct=fct.substring(1,fct.length-1);
        if(input.substring(0,1)=="\"")  input=input.substring(1,input.length-1);

        Generator.addCode(`${fct}(${input})`);    
    }

    //% block="Function call without return value: [FUNCTION]([INPUT]);" blockType="command"
    //% FUNCTION.shadow="string" FUNCTION.defl="functionName"
    //% INPUT.shadow="string" INPUT.defl="1,1"
    export function functionWithoutReturn(parameter:any){
        let fct=parameter.FUNCTION.code;
        let input=parameter.INPUT.code;

        if(fct.substring(0,1)=="\"")  fct=fct.substring(1,fct.length-1);
        if(input.substring(0,1)=="\"")  input=input.substring(1,input.length-1);

        Generator.addCode(`${fct}(${input});`);    
    }
   
}
