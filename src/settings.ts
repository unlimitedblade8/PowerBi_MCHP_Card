/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
import powerbi from "powerbi-visuals-api";

export interface IVisualTextProperties {
    fontSize: number;
    fontFamily: string;
    isBold: boolean;
    isItalic: boolean;
}

export class VisualSettings extends DataViewObjectsParser {
    public prefixSettings = new FixLabelSettings();
    public postfixSettings = new FixLabelSettings();
    public dataLabelSettings = new DataLabelSettings();
    public categoryLabelSettings = new CategoryLabelSettings();
    public backgroundSettings = new FillSettings();
    public strokeSettings = new StrokeSettings();
    public conditionSettings = new ConditionSettings();
    public tootlipSettings = new TooltipSettings();
    public aboutSettings = new AboutSettings();
    public general = new GeneralSettings();
}

export class FixLabelSettings implements IVisualTextProperties {
    public show: boolean = false;
    public text: string = null;
    public color: string = "#333333";
    public spacing: number = 4;
    public fontSize: number = 16;
    public fontFamily: string = "\"Segoe UI\", wf_segoe-ui_normal, helvetica, arial, sans-serif";
    public isBold: boolean = false;
    public isItalic: boolean = false;
}

export class DataLabelSettings implements IVisualTextProperties {
    public color: string = "#333333";
    public displayUnit: number = 0;
    public decimalPlaces: number = 0;
    public fontSize: number = 27;
    public fontFamily: string = "wf_standard-font, helvetica, arial, sans-serif";
    public isBold: boolean = false;
    public isItalic: boolean = false;
}

export class CategoryLabelSettings implements IVisualTextProperties {
    public show: boolean = true;
    public color: string = "#a6a6a6";
    public fontSize: number = 12;
    public fontFamily: string = "\"Segoe UI\", wf_segoe-ui_normal, helvetica, arial, sans-serif";
    public isBold: boolean = false;
    public isItalic: boolean = false;
}

export class FillSettings {
    public show: boolean = false;
    public backgroundColor: powerbi.Fill = null;
    public showImage: boolean = false;
    public imageURL: string = null;
    public imagePadding: number = 0;
    public transparency: number = 0;
}

export class StrokeSettings {
    // default stroke type numbers
    // 0: solid
    // 1: dashed
    // 2: dotted
    public show: boolean = false;
    public strokeColor: powerbi.Fill = null;
    public strokeWidth: number = 2;
    public strokeType: string = "0";
    public strokeArray: string = null;
    public cornerRadius: number = 15;
    public topLeft: boolean = false;
    public topRight: boolean = false;
    public bottomLeft: boolean = false;
    public bottomRight: boolean = false;
    public topLeftInward: boolean = false;
    public topRightInward: boolean = false;
    public bottomLeftInward: boolean = false;
    public bottomRightInward: boolean = false;
}

export class ConditionSettings {
    public show: boolean = false;
    public conditionNumbers: number = 2;
    public applyToDataLabel: boolean = true;
    public applyToCategoryLabel: boolean = false;
    public applyToPrefix: boolean = false;
    public applyToPostfix: boolean = false;

    public condition1: string = ">";
    public value1: number = null;
    public foregroundColor1: powerbi.Fill = null;
    public backgroundColor1: powerbi.Fill = null;

    public condition2: string = ">";
    public value2: number = null;
    public foregroundColor2: powerbi.Fill = null;
    public backgroundColor2: powerbi.Fill = null;

    public condition3: string = ">";
    public value3: number = null;
    public foregroundColor3: powerbi.Fill = null;
    public backgroundColor3: powerbi.Fill = null;

    public condition4: string = ">";
    public value4: number = null;
    public foregroundColor4: powerbi.Fill = null;
    public backgroundColor4: powerbi.Fill = null;

    public condition5: string = ">";
    public value5: number = null;
    public foregroundColor5: powerbi.Fill = null;
    public backgroundColor5: powerbi.Fill = null;

    public condition6: string = ">";
    public value6: number = null;
    public foregroundColor6: powerbi.Fill = null;
    public backgroundColor6: powerbi.Fill = null;

    public condition7: string = ">";
    public value7: number = null;
    public foregroundColor7: powerbi.Fill = null;
    public backgroundColor7: powerbi.Fill = null;

    public condition8: string = ">";
    public value8: number = null;
    public foregroundColor8: powerbi.Fill = null;
    public backgroundColor8: powerbi.Fill = null;

    public condition9: string = ">";
    public value9: number = null;
    public foregroundColor9: powerbi.Fill = null;
    public backgroundColor9: powerbi.Fill = null;

    public condition10: string = ">";
    public value10: number = null;
    public foregroundColor10: powerbi.Fill = null;
    public backgroundColor10: powerbi.Fill = null;
}

export class TooltipSettings {
    public show: boolean = false;
    public title: string = null;
    public content: string = null;
    public measureFormat: number = 0;
    public measurePrecision: number = 0;
}

export class AboutSettings {
    public version: string = "";
    public helpUrl: string = "";
}

export class GeneralSettings {
    public alignment: string = "center";
    public alignmentSpacing: number = 10;
}
