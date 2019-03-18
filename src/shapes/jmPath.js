import jmControl from "./jmControl.js";
/**
 * 基础路径,大部分图型的基类
 * 指定一系列点，画出图形
 *
 * @class jmPath
 * @for jmGraph
 * @module jmGraph
 * @param {jmGraph} graph 画布
 * @param {object} params 路径参数 points=所有描点
 */

class jmPath extends jmControl {
	/**
	 * 当前对象类型名jmPath
	 *
	 * @property type
	 * @type string
	 */
	type = 'jmPath';

	constructor(params) {
		super(params);		
		this.points = params && params.points ? params.points : [];		
	}
	
	/**
	 * 描点集合
	 * point格式：{x:0,y:0,m:true}
	 * @property points
	 * @type {array}
	 */
	get points() {
		let s = this.__pro('points');
		return s;
	}
	set points(v) {
		return this.__pro('points', v);
	}
}

export default jmPath;
