/**
 * StackBlur - a fast almost Gaussian Blur For Canvas
 *
 * In case you find this class useful - especially in commercial projects -
 * I am not totally unhappy for a small donation to my PayPal account
 * mario@quasimondo.de
 *
 * Or support me on flattr:
 * {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
 *
 * @module StackBlur
 * @author Mario Klingemann
 * Contact: mario@quasimondo.com
 * Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
 * Twitter: @quasimondo
 *
 * @copyright (c) 2010 Mario Klingemann
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/**
 *
 */
export declare class BlurStack {
    /**
     * Set properties.
     */
    r: number;
    g: number;
    b: number;
    a: number;
    next?: BlurStack;
    constructor();
}
export declare const stackBlurImage: (imageData: ImageData, width: number, height: number, radius: number, blurAlphaChannel: number) => ImageData;
