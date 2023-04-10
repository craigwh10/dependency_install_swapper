describe('given the install field exists and there is no reference of dev dep in readme', () => {
    // it('should show a warning that this could still be a dev dependency', () => {
    //     mockHasInstallCommandsInReadme.mockReturnValue(false);

    //     document.body.innerHTML = `
    //         <div>
    //             <div>
    //                 <code class="flex-auto truncate db" title="Copy Command to Clipboard">
    //                     <span role="button" tabindex="0" aria-label="Install, yarn add test">
    //                         yarn add test
    //                     </span>
    //                 </code>
    //             </div>
    //         </div>
    //     `;

    //     handleInstallButton('yarn');

    //     expect(document.body.textContent).toContain('yarn add test');
    //     expect(document.body.querySelector('b')?.textContent).toContain('Warning:');
    //     expect(document.body.querySelectorAll('#dis-google-ext-warning')).toHaveLength(1);
    // })
    // it('should not show a warning if readme does not contain a reference to a regular install command for package', () => {
    //     mockHasInstallCommandsInReadme
    //     .mockReturnValueOnce(false) // check for dev command false
    //     .mockReturnValueOnce(true); // check for regular command true

    //     document.body.innerHTML = `
    //         <div>
    //             <div>
    //                 <code class="flex-auto truncate db" title="Copy Command to Clipboard">
    //                     <span role="button" tabindex="0" aria-label="Install, yarn add test">
    //                         yarn add test
    //                     </span>
    //                 </code>
    //             </div>
    //         </div>
    //     `;

    //     handleInstallButton('yarn');

    //     expect(document.body.textContent).toContain('yarn add test');
    //     expect(document.body.querySelectorAll('#dis-google-ext-warning')).toHaveLength(0);
    // })
    // it('if the warning already exists dont add it again', () => {
    //     document.body.innerHTML = `
    //         <div>
    //             <div>
    //                 <code class="flex-auto truncate db" title="Copy Command to Clipboard">
    //                     <span role="button" tabindex="0" aria-label="Install, yarn add test">
    //                         yarn add test
    //                     </span>
    //                 </code>
    //                 <div id="dis-google-ext-warning" style="color: #886701; background: #fff5db; padding: 16px; border: 1px solid #886701; border-radius: 5px;">
    //                     <b>Warning:</b><br><br/>No example install commands found in readme.<br/><br/>So this could potentially be a development dependency.
    //                 </div>
    //             </div>
    //         </div>
    //     `;

    //     handleInstallButton('yarn');

    //     expect(document.body.textContent).toContain('yarn add test');
    //     expect(document.body.querySelectorAll('#dis-google-ext-warning')).toHaveLength(1);
    // })
})