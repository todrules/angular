export var LifecycleHooks;
(function (LifecycleHooks) {
    LifecycleHooks[LifecycleHooks["OnInit"] = 0] = "OnInit";
    LifecycleHooks[LifecycleHooks["OnDestroy"] = 1] = "OnDestroy";
    LifecycleHooks[LifecycleHooks["DoCheck"] = 2] = "DoCheck";
    LifecycleHooks[LifecycleHooks["OnChanges"] = 3] = "OnChanges";
    LifecycleHooks[LifecycleHooks["AfterContentInit"] = 4] = "AfterContentInit";
    LifecycleHooks[LifecycleHooks["AfterContentChecked"] = 5] = "AfterContentChecked";
    LifecycleHooks[LifecycleHooks["AfterViewInit"] = 6] = "AfterViewInit";
    LifecycleHooks[LifecycleHooks["AfterViewChecked"] = 7] = "AfterViewChecked";
})(LifecycleHooks || (LifecycleHooks = {}));
/**
 * @internal
 */
export var LIFECYCLE_HOOKS_VALUES = [
    LifecycleHooks.OnInit,
    LifecycleHooks.OnDestroy,
    LifecycleHooks.DoCheck,
    LifecycleHooks.OnChanges,
    LifecycleHooks.AfterContentInit,
    LifecycleHooks.AfterContentChecked,
    LifecycleHooks.AfterViewInit,
    LifecycleHooks.AfterViewChecked
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX2hvb2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1XeHFianp3NS50bXAvYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLFdBQVksY0FTWDtBQVRELFdBQVksY0FBYztJQUN4Qix1REFBTSxDQUFBO0lBQ04sNkRBQVMsQ0FBQTtJQUNULHlEQUFPLENBQUE7SUFDUCw2REFBUyxDQUFBO0lBQ1QsMkVBQWdCLENBQUE7SUFDaEIsaUZBQW1CLENBQUE7SUFDbkIscUVBQWEsQ0FBQTtJQUNiLDJFQUFnQixDQUFBO0FBQ2xCLENBQUMsRUFUVyxjQUFjLEtBQWQsY0FBYyxRQVN6QjtBQUVEOztHQUVHO0FBQ0gsT0FBTyxJQUFJLHNCQUFzQixHQUFHO0lBQ2xDLGNBQWMsQ0FBQyxNQUFNO0lBQ3JCLGNBQWMsQ0FBQyxTQUFTO0lBQ3hCLGNBQWMsQ0FBQyxPQUFPO0lBQ3RCLGNBQWMsQ0FBQyxTQUFTO0lBQ3hCLGNBQWMsQ0FBQyxnQkFBZ0I7SUFDL0IsY0FBYyxDQUFDLG1CQUFtQjtJQUNsQyxjQUFjLENBQUMsYUFBYTtJQUM1QixjQUFjLENBQUMsZ0JBQWdCO0NBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NpbXBsZUNoYW5nZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uX3V0aWwnO1xuXG5leHBvcnQgZW51bSBMaWZlY3ljbGVIb29rcyB7XG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBEb0NoZWNrLFxuICBPbkNoYW5nZXMsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyVmlld0luaXQsXG4gIEFmdGVyVmlld0NoZWNrZWRcbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IHZhciBMSUZFQ1lDTEVfSE9PS1NfVkFMVUVTID0gW1xuICBMaWZlY3ljbGVIb29rcy5PbkluaXQsXG4gIExpZmVjeWNsZUhvb2tzLk9uRGVzdHJveSxcbiAgTGlmZWN5Y2xlSG9va3MuRG9DaGVjayxcbiAgTGlmZWN5Y2xlSG9va3MuT25DaGFuZ2VzLFxuICBMaWZlY3ljbGVIb29rcy5BZnRlckNvbnRlbnRJbml0LFxuICBMaWZlY3ljbGVIb29rcy5BZnRlckNvbnRlbnRDaGVja2VkLFxuICBMaWZlY3ljbGVIb29rcy5BZnRlclZpZXdJbml0LFxuICBMaWZlY3ljbGVIb29rcy5BZnRlclZpZXdDaGVja2VkXG5dO1xuXG4vKipcbiAqIExpZmVjeWNsZSBob29rcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBjYWxsZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjpcbiAqIC0gYE9uQ2hhbmdlc2AgKGlmIGFueSBiaW5kaW5ncyBoYXZlIGNoYW5nZWQpLFxuICogLSBgT25Jbml0YCAoYWZ0ZXIgdGhlIGZpcnN0IGNoZWNrIG9ubHkpLFxuICogLSBgRG9DaGVja2AsXG4gKiAtIGBBZnRlckNvbnRlbnRJbml0YCxcbiAqIC0gYEFmdGVyQ29udGVudENoZWNrZWRgLFxuICogLSBgQWZ0ZXJWaWV3SW5pdGAsXG4gKiAtIGBBZnRlclZpZXdDaGVja2VkYCxcbiAqIC0gYE9uRGVzdHJveWAgKGF0IHRoZSB2ZXJ5IGVuZCBiZWZvcmUgZGVzdHJ1Y3Rpb24pXG4gKi9cblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgdG8gZ2V0IG5vdGlmaWVkIHdoZW4gYW55IGRhdGEtYm91bmQgcHJvcGVydHkgb2YgeW91ciBkaXJlY3RpdmUgY2hhbmdlcy5cbiAqXG4gKiBgbmdPbkNoYW5nZXNgIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBjaGVja2VkIGFuZCBiZWZvcmUgdmlld1xuICogYW5kIGNvbnRlbnQgY2hpbGRyZW4gYXJlIGNoZWNrZWQgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZW0gaGFzIGNoYW5nZWQuXG4gKlxuICogVGhlIGBjaGFuZ2VzYCBwYXJhbWV0ZXIgY29udGFpbnMgYW4gZW50cnkgZm9yIGVhY2ggb2YgdGhlIGNoYW5nZWQgZGF0YS1ib3VuZCBwcm9wZXJ0eS4gVGhlIGtleSBpc1xuICogdGhlIHByb3BlcnR5IG5hbWUgYW5kIHRoZSB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiB7QGxpbmsgU2ltcGxlQ2hhbmdlfS5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZXhhbXBsZV0oaHR0cDovL3BsbmtyLmNvL2VkaXQvQUhyQjZvcExxSERCUGt0NEtwZFQ/cD1wcmV2aWV3KSk6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnbXktY21wJyxcbiAqICAgdGVtcGxhdGU6IGA8cD5teVByb3AgPSB7e215UHJvcH19PC9wPmBcbiAqIH0pXG4gKiBjbGFzcyBNeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gKiAgIEBJbnB1dCgpIG15UHJvcDogYW55O1xuICpcbiAqICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xuICogICAgIGNvbnNvbGUubG9nKCduZ09uQ2hhbmdlcyAtIG15UHJvcCA9ICcgKyBjaGFuZ2VzWydteVByb3AnXS5jdXJyZW50VmFsdWUpO1xuICogICB9XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8YnV0dG9uIChjbGljayk9XCJ2YWx1ZSA9IHZhbHVlICsgMVwiPkNoYW5nZSBNeUNvbXBvbmVudDwvYnV0dG9uPlxuICogICAgIDxteS1jbXAgW215LXByb3BdPVwidmFsdWVcIj48L215LWNtcD5gLFxuICogICBkaXJlY3RpdmVzOiBbTXlDb21wb25lbnRdXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIEFwcCB7XG4gKiAgIHZhbHVlID0gMDtcbiAqIH1cbiAqXG4gKiBib290c3RyYXAoQXBwKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAqIGBgYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9uQ2hhbmdlcyB7IG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtba2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KTsgfVxuXG4vKipcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBleGVjdXRlIGN1c3RvbSBpbml0aWFsaXphdGlvbiBsb2dpYyBhZnRlciB5b3VyIGRpcmVjdGl2ZSdzXG4gKiBkYXRhLWJvdW5kIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGluaXRpYWxpemVkLlxuICpcbiAqIGBuZ09uSW5pdGAgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBkaXJlY3RpdmUncyBkYXRhLWJvdW5kIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGNoZWNrZWQgZm9yIHRoZVxuICogZmlyc3QgdGltZSwgYW5kIGJlZm9yZSBhbnkgb2YgaXRzIGNoaWxkcmVuIGhhdmUgYmVlbiBjaGVja2VkLiBJdCBpcyBpbnZva2VkIG9ubHkgb25jZSB3aGVuIHRoZVxuICogZGlyZWN0aXZlIGlzIGluc3RhbnRpYXRlZC5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZXhhbXBsZV0oaHR0cDovL3BsbmtyLmNvL2VkaXQvMU1CeXBScnlYZDY0djRwVjAzWW4/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdteS1jbXAnLFxuICogICB0ZW1wbGF0ZTogYDxwPm15LWNvbXBvbmVudDwvcD5gXG4gKiB9KVxuICogY2xhc3MgTXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gKiAgIG5nT25Jbml0KCkge1xuICogICAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCcpO1xuICogICB9XG4gKlxuICogICBuZ09uRGVzdHJveSgpIHtcbiAqICAgICBjb25zb2xlLmxvZygnbmdPbkRlc3Ryb3knKTtcbiAqICAgfVxuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaGFzQ2hpbGQgPSAhaGFzQ2hpbGRcIj5cbiAqICAgICAgIHt7aGFzQ2hpbGQgPyAnRGVzdHJveScgOiAnQ3JlYXRlJ319IE15Q29tcG9uZW50XG4gKiAgICAgPC9idXR0b24+XG4gKiAgICAgPG15LWNtcCAqbmdJZj1cImhhc0NoaWxkXCI+PC9teS1jbXA+YCxcbiAqICAgZGlyZWN0aXZlczogW015Q29tcG9uZW50LCBOZ0lmXVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHAge1xuICogICBoYXNDaGlsZCA9IHRydWU7XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gKiAgYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT25Jbml0IHsgbmdPbkluaXQoKTsgfVxuXG4vKipcbiAqIEltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBjaGFuZ2UgZGV0ZWN0aW9uIGFsZ29yaXRobSBmb3IgeW91ciBkaXJlY3RpdmUuXG4gKlxuICogYG5nRG9DaGVja2AgZ2V0cyBjYWxsZWQgdG8gY2hlY2sgdGhlIGNoYW5nZXMgaW4gdGhlIGRpcmVjdGl2ZXMgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBhbGdvcml0aG0uXG4gKlxuICogVGhlIGRlZmF1bHQgY2hhbmdlIGRldGVjdGlvbiBhbGdvcml0aG0gbG9va3MgZm9yIGRpZmZlcmVuY2VzIGJ5IGNvbXBhcmluZyBib3VuZC1wcm9wZXJ0eSB2YWx1ZXNcbiAqIGJ5IHJlZmVyZW5jZSBhY3Jvc3MgY2hhbmdlIGRldGVjdGlvbiBydW5zLiBXaGVuIGBEb0NoZWNrYCBpcyBpbXBsZW1lbnRlZCwgdGhlIGRlZmF1bHQgYWxnb3JpdGhtXG4gKiBpcyBkaXNhYmxlZCBhbmQgYG5nRG9DaGVja2AgaXMgcmVzcG9uc2libGUgZm9yIGNoZWNraW5nIGZvciBjaGFuZ2VzLlxuICpcbiAqIEltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhbGxvd3MgaW1wcm92aW5nIHBlcmZvcm1hbmNlIGJ5IHVzaW5nIGluc2lnaHRzIGFib3V0IHRoZSBjb21wb25lbnQsXG4gKiBpdHMgaW1wbGVtZW50YXRpb24gYW5kIGRhdGEgdHlwZXMgb2YgaXRzIHByb3BlcnRpZXMuXG4gKlxuICogTm90ZSB0aGF0IGEgZGlyZWN0aXZlIHNob3VsZCBub3QgaW1wbGVtZW50IGJvdGggYERvQ2hlY2tgIGFuZCB7QGxpbmsgT25DaGFuZ2VzfSBhdCB0aGUgc2FtZSB0aW1lLlxuICogYG5nT25DaGFuZ2VzYCB3b3VsZCBub3QgYmUgY2FsbGVkIHdoZW4gYSBkaXJlY3RpdmUgaW1wbGVtZW50cyBgRG9DaGVja2AuIFJlYWN0aW9uIHRvIHRoZSBjaGFuZ2VzXG4gKiBoYXZlIHRvIGJlIGhhbmRsZWQgZnJvbSB3aXRoaW4gdGhlIGBuZ0RvQ2hlY2tgIGNhbGxiYWNrLlxuICpcbiAqIFVzZSB7QGxpbmsgS2V5VmFsdWVEaWZmZXJzfSBhbmQge0BsaW5rIEl0ZXJhYmxlRGlmZmVyc30gdG8gYWRkIHlvdXIgY3VzdG9tIGNoZWNrIG1lY2hhbmlzbXMuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L1FwbklsRjBDUjJpNWJjWWJIRVVKP3A9cHJldmlldykpXG4gKlxuICogSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlIGBuZ0RvQ2hlY2tgIHVzZXMgYW4ge0BsaW5rIEl0ZXJhYmxlRGlmZmVyc30gdG8gZGV0ZWN0IHRoZSB1cGRhdGVzIHRvIHRoZVxuICogYXJyYXkgYGxpc3RgOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2N1c3RvbS1jaGVjaycsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPHA+Q2hhbmdlczo8L3A+XG4gKiAgICAgPHVsPlxuICogICAgICAgPGxpICpuZ0Zvcj1cImxldCBsaW5lIG9mIGxvZ3NcIj57e2xpbmV9fTwvbGk+XG4gKiAgICAgPC91bD5gLFxuICogICBkaXJlY3RpdmVzOiBbTmdGb3JdXG4gKiB9KVxuICogY2xhc3MgQ3VzdG9tQ2hlY2tDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAqICAgQElucHV0KCkgbGlzdDogYW55W107XG4gKiAgIGRpZmZlcjogYW55O1xuICogICBsb2dzID0gW107XG4gKlxuICogICBjb25zdHJ1Y3RvcihkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpIHtcbiAqICAgICB0aGlzLmRpZmZlciA9IGRpZmZlcnMuZmluZChbXSkuY3JlYXRlKG51bGwpO1xuICogICB9XG4gKlxuICogICBuZ0RvQ2hlY2soKSB7XG4gKiAgICAgdmFyIGNoYW5nZXMgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMubGlzdCk7XG4gKlxuICogICAgIGlmIChjaGFuZ2VzKSB7XG4gKiAgICAgICBjaGFuZ2VzLmZvckVhY2hBZGRlZEl0ZW0ociA9PiB0aGlzLmxvZ3MucHVzaCgnYWRkZWQgJyArIHIuaXRlbSkpO1xuICogICAgICAgY2hhbmdlcy5mb3JFYWNoUmVtb3ZlZEl0ZW0ociA9PiB0aGlzLmxvZ3MucHVzaCgncmVtb3ZlZCAnICsgci5pdGVtKSlcbiAqICAgICB9XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxidXR0b24gKGNsaWNrKT1cImxpc3QucHVzaChsaXN0Lmxlbmd0aClcIj5QdXNoPC9idXR0b24+XG4gKiAgICAgPGJ1dHRvbiAoY2xpY2spPVwibGlzdC5wb3AoKVwiPlBvcDwvYnV0dG9uPlxuICogICAgIDxjdXN0b20tY2hlY2sgW2xpc3RdPVwibGlzdFwiPjwvY3VzdG9tLWNoZWNrPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtDdXN0b21DaGVja0NvbXBvbmVudF1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwIHtcbiAqICAgbGlzdCA9IFtdO1xuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRG9DaGVjayB7IG5nRG9DaGVjaygpOyB9XG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvIGdldCBub3RpZmllZCB3aGVuIHlvdXIgZGlyZWN0aXZlIGlzIGRlc3Ryb3llZC5cbiAqXG4gKiBgbmdPbkRlc3Ryb3lgIGNhbGxiYWNrIGlzIHR5cGljYWxseSB1c2VkIGZvciBhbnkgY3VzdG9tIGNsZWFudXAgdGhhdCBuZWVkcyB0byBvY2N1ciB3aGVuIHRoZVxuICogaW5zdGFuY2UgaXMgZGVzdHJveWVkXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGV4YW1wbGVdKGh0dHA6Ly9wbG5rci5jby9lZGl0LzFNQnlwUnJ5WGQ2NHY0cFYwM1luP3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNyaXB0XG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdteS1jbXAnLFxuICogICB0ZW1wbGF0ZTogYDxwPm15LWNvbXBvbmVudDwvcD5gXG4gKiB9KVxuICogY2xhc3MgTXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gKiAgIG5nT25Jbml0KCkge1xuICogICAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCcpO1xuICogICB9XG4gKlxuICogICBuZ09uRGVzdHJveSgpIHtcbiAqICAgICBjb25zb2xlLmxvZygnbmdPbkRlc3Ryb3knKTtcbiAqICAgfVxuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ2FwcCcsXG4gKiAgIHRlbXBsYXRlOiBgXG4gKiAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaGFzQ2hpbGQgPSAhaGFzQ2hpbGRcIj5cbiAqICAgICAgIHt7aGFzQ2hpbGQgPyAnRGVzdHJveScgOiAnQ3JlYXRlJ319IE15Q29tcG9uZW50XG4gKiAgICAgPC9idXR0b24+XG4gKiAgICAgPG15LWNtcCAqbmdJZj1cImhhc0NoaWxkXCI+PC9teS1jbXA+YCxcbiAqICAgZGlyZWN0aXZlczogW015Q29tcG9uZW50LCBOZ0lmXVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHAge1xuICogICBoYXNDaGlsZCA9IHRydWU7XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gKiBgYGBcbiAqXG4gKlxuICogVG8gY3JlYXRlIGEgc3RhdGVmdWwgUGlwZSwgeW91IHNob3VsZCBpbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgYW5kIHNldCB0aGUgYHB1cmVgXG4gKiBwYXJhbWV0ZXIgdG8gYGZhbHNlYCBpbiB0aGUge0BsaW5rIFBpcGVNZXRhZGF0YX0uXG4gKlxuICogQSBzdGF0ZWZ1bCBwaXBlIG1heSBwcm9kdWNlIGRpZmZlcmVudCBvdXRwdXQsIGdpdmVuIHRoZSBzYW1lIGlucHV0LiBJdCBpc1xuICogbGlrZWx5IHRoYXQgYSBzdGF0ZWZ1bCBwaXBlIG1heSBjb250YWluIHN0YXRlIHRoYXQgc2hvdWxkIGJlIGNsZWFuZWQgdXAgd2hlblxuICogYSBiaW5kaW5nIGlzIGRlc3Ryb3llZC4gRm9yIGV4YW1wbGUsIGEgc3Vic2NyaXB0aW9uIHRvIGEgc3RyZWFtIG9mIGRhdGEgbWF5IG5lZWQgdG9cbiAqIGJlIGRpc3Bvc2VkLCBvciBhbiBpbnRlcnZhbCBtYXkgbmVlZCB0byBiZSBjbGVhcmVkLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9pOHBtNWJyTzRzUGFMeEJ4NTZNUj9wPXByZXZpZXcpKVxuICpcbiAqIEluIHRoaXMgZXhhbXBsZSwgYSBwaXBlIGlzIGNyZWF0ZWQgdG8gY291bnRkb3duIGl0cyBpbnB1dCB2YWx1ZSwgdXBkYXRpbmcgaXQgZXZlcnlcbiAqIDUwbXMuIEJlY2F1c2UgaXQgbWFpbnRhaW5zIGFuIGludGVybmFsIGludGVydmFsLCBpdCBhdXRvbWF0aWNhbGx5IGNsZWFyc1xuICogdGhlIGludGVydmFsIHdoZW4gdGhlIGJpbmRpbmcgaXMgZGVzdHJveWVkIG9yIHRoZSBjb3VudGRvd24gY29tcGxldGVzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtPbkRlc3Ryb3ksIFBpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG4gKiBAUGlwZSh7bmFtZTogJ2NvdW50ZG93bicsIHB1cmU6IGZhbHNlfSlcbiAqIGNsYXNzIENvdW50RG93biBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gKiAgIHJlbWFpbmluZ1RpbWU6TnVtYmVyO1xuICogICBpbnRlcnZhbDpTZXRJbnRlcnZhbDtcbiAqICAgbmdPbkRlc3Ryb3koKSB7XG4gKiAgICAgaWYgKHRoaXMuaW50ZXJ2YWwpIHtcbiAqICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gKiAgICAgfVxuICogICB9XG4gKiAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzOiBhbnlbXSA9IFtdKSB7XG4gKiAgICAgaWYgKCFwYXJzZUludCh2YWx1ZSwgMTApKSByZXR1cm4gbnVsbDtcbiAqICAgICBpZiAodHlwZW9mIHRoaXMucmVtYWluaW5nVGltZSAhPT0gJ251bWJlcicpIHtcbiAqICAgICAgIHRoaXMucmVtYWluaW5nVGltZSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gKiAgICAgfVxuICogICAgIGlmICghdGhpcy5pbnRlcnZhbCkge1xuICogICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAqICAgICAgICAgdGhpcy5yZW1haW5pbmdUaW1lLT01MDtcbiAqICAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nVGltZSA8PSAwKSB7XG4gKiAgICAgICAgICAgdGhpcy5yZW1haW5pbmdUaW1lID0gMDtcbiAqICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICogICAgICAgICAgIGRlbGV0ZSB0aGlzLmludGVydmFsO1xuICogICAgICAgICB9XG4gKiAgICAgICB9LCA1MCk7XG4gKiAgICAgfVxuICogICAgIHJldHVybiB0aGlzLnJlbWFpbmluZ1RpbWU7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEludm9raW5nIGB7eyAxMDAwMCB8IGNvdW50ZG93biB9fWAgd291bGQgY2F1c2UgdGhlIHZhbHVlIHRvIGJlIGRlY3JlbWVudGVkIGJ5IDUwLFxuICogZXZlcnkgNTBtcywgdW50aWwgaXQgcmVhY2hlcyAwLlxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPbkRlc3Ryb3kgeyBuZ09uRGVzdHJveSgpOyB9XG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvIGdldCBub3RpZmllZCB3aGVuIHlvdXIgZGlyZWN0aXZlJ3MgY29udGVudCBoYXMgYmVlbiBmdWxseVxuICogaW5pdGlhbGl6ZWQuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L3BsYW1YVXBzTFFiSVhwVmlaaFVPP3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnY2hpbGQtY21wJyxcbiAqICAgdGVtcGxhdGU6IGB7e3doZXJlfX0gY2hpbGRgXG4gKiB9KVxuICogY2xhc3MgQ2hpbGRDb21wb25lbnQge1xuICogICBASW5wdXQoKSB3aGVyZTogc3RyaW5nO1xuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ3BhcmVudC1jbXAnLFxuICogICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG4gKiB9KVxuICogY2xhc3MgUGFyZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gKiAgIEBDb250ZW50Q2hpbGQoQ2hpbGRDb21wb25lbnQpIGNvbnRlbnRDaGlsZDogQ2hpbGRDb21wb25lbnQ7XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICAvLyBjb250ZW50Q2hpbGQgaXMgbm90IGluaXRpYWxpemVkIHlldFxuICogICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0TWVzc2FnZSh0aGlzLmNvbnRlbnRDaGlsZCkpO1xuICogICB9XG4gKlxuICogICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gKiAgICAgLy8gY29udGVudENoaWxkIGlzIHVwZGF0ZWQgYWZ0ZXIgdGhlIGNvbnRlbnQgaGFzIGJlZW4gY2hlY2tlZFxuICogICAgIGNvbnNvbGUubG9nKCdBZnRlckNvbnRlbnRJbml0OiAnICsgdGhpcy5nZXRNZXNzYWdlKHRoaXMuY29udGVudENoaWxkKSk7XG4gKiAgIH1cbiAqXG4gKiAgIHByaXZhdGUgZ2V0TWVzc2FnZShjbXA6IENoaWxkQ29tcG9uZW50KTogc3RyaW5nIHtcbiAqICAgICByZXR1cm4gY21wID8gY21wLndoZXJlICsgJyBjaGlsZCcgOiAnbm8gY2hpbGQnO1xuICogICB9XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8cGFyZW50LWNtcD5cbiAqICAgICAgIDxjaGlsZC1jbXAgd2hlcmU9XCJjb250ZW50XCI+PC9jaGlsZC1jbXA+XG4gKiAgICAgPC9wYXJlbnQtY21wPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtQYXJlbnRDb21wb25lbnQsIENoaWxkQ29tcG9uZW50XVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHAge1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHApLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWZ0ZXJDb250ZW50SW5pdCB7IG5nQWZ0ZXJDb250ZW50SW5pdCgpOyB9XG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvIGdldCBub3RpZmllZCBhZnRlciBldmVyeSBjaGVjayBvZiB5b3VyIGRpcmVjdGl2ZSdzIGNvbnRlbnQuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0L3RHZHJ5dE5FS1FuZWNJUGtEN05VP3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7c2VsZWN0b3I6ICdjaGlsZC1jbXAnLCB0ZW1wbGF0ZTogYHt7d2hlcmV9fSBjaGlsZGB9KVxuICogY2xhc3MgQ2hpbGRDb21wb25lbnQge1xuICogICBASW5wdXQoKSB3aGVyZTogc3RyaW5nO1xuICogfVxuICpcbiAqIEBDb21wb25lbnQoe3NlbGVjdG9yOiAncGFyZW50LWNtcCcsIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmB9KVxuICogY2xhc3MgUGFyZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gKiAgIEBDb250ZW50Q2hpbGQoQ2hpbGRDb21wb25lbnQpIGNvbnRlbnRDaGlsZDogQ2hpbGRDb21wb25lbnQ7XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICAvLyBjb250ZW50Q2hpbGQgaXMgbm90IGluaXRpYWxpemVkIHlldFxuICogICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0TWVzc2FnZSh0aGlzLmNvbnRlbnRDaGlsZCkpO1xuICogICB9XG4gKlxuICogICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gKiAgICAgLy8gY29udGVudENoaWxkIGlzIHVwZGF0ZWQgYWZ0ZXIgdGhlIGNvbnRlbnQgaGFzIGJlZW4gY2hlY2tlZFxuICogICAgIGNvbnNvbGUubG9nKCdBZnRlckNvbnRlbnRDaGVja2VkOiAnICsgdGhpcy5nZXRNZXNzYWdlKHRoaXMuY29udGVudENoaWxkKSk7XG4gKiAgIH1cbiAqXG4gKiAgIHByaXZhdGUgZ2V0TWVzc2FnZShjbXA6IENoaWxkQ29tcG9uZW50KTogc3RyaW5nIHtcbiAqICAgICByZXR1cm4gY21wID8gY21wLndoZXJlICsgJyBjaGlsZCcgOiAnbm8gY2hpbGQnO1xuICogICB9XG4gKiB9XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnYXBwJyxcbiAqICAgdGVtcGxhdGU6IGBcbiAqICAgICA8cGFyZW50LWNtcD5cbiAqICAgICAgIDxidXR0b24gKGNsaWNrKT1cImhhc0NvbnRlbnQgPSAhaGFzQ29udGVudFwiPlRvZ2dsZSBjb250ZW50IGNoaWxkPC9idXR0b24+XG4gKiAgICAgICA8Y2hpbGQtY21wICpuZ0lmPVwiaGFzQ29udGVudFwiIHdoZXJlPVwiY29udGVudFwiPjwvY2hpbGQtY21wPlxuICogICAgIDwvcGFyZW50LWNtcD5gLFxuICogICBkaXJlY3RpdmVzOiBbTmdJZiwgUGFyZW50Q29tcG9uZW50LCBDaGlsZENvbXBvbmVudF1cbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgQXBwIHtcbiAqICAgaGFzQ29udGVudCA9IHRydWU7XG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKEFwcCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZnRlckNvbnRlbnRDaGVja2VkIHsgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk7IH1cblxuLyoqXG4gKiBJbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgdG8gZ2V0IG5vdGlmaWVkIHdoZW4geW91ciBjb21wb25lbnQncyB2aWV3IGhhcyBiZWVuIGZ1bGx5IGluaXRpYWxpemVkLlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9MaFRLVk1FTTBma0pneXA0Q0kxVz9wPXByZXZpZXcpKVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoe3NlbGVjdG9yOiAnY2hpbGQtY21wJywgdGVtcGxhdGU6IGB7e3doZXJlfX0gY2hpbGRgfSlcbiAqIGNsYXNzIENoaWxkQ29tcG9uZW50IHtcbiAqICAgQElucHV0KCkgd2hlcmU6IHN0cmluZztcbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdwYXJlbnQtY21wJyxcbiAqICAgdGVtcGxhdGU6IGA8Y2hpbGQtY21wIHdoZXJlPVwidmlld1wiPjwvY2hpbGQtY21wPmAsXG4gKiAgIGRpcmVjdGl2ZXM6IFtDaGlsZENvbXBvbmVudF1cbiAqIH0pXG4gKiBjbGFzcyBQYXJlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAqICAgQFZpZXdDaGlsZChDaGlsZENvbXBvbmVudCkgdmlld0NoaWxkOiBDaGlsZENvbXBvbmVudDtcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIC8vIHZpZXdDaGlsZCBpcyBub3QgaW5pdGlhbGl6ZWQgeWV0XG4gKiAgICAgY29uc29sZS5sb2codGhpcy5nZXRNZXNzYWdlKHRoaXMudmlld0NoaWxkKSk7XG4gKiAgIH1cbiAqXG4gKiAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAqICAgICAvLyB2aWV3Q2hpbGQgaXMgdXBkYXRlZCBhZnRlciB0aGUgdmlldyBoYXMgYmVlbiBpbml0aWFsaXplZFxuICogICAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQ6ICcgKyB0aGlzLmdldE1lc3NhZ2UodGhpcy52aWV3Q2hpbGQpKTtcbiAqICAgfVxuICpcbiAqICAgcHJpdmF0ZSBnZXRNZXNzYWdlKGNtcDogQ2hpbGRDb21wb25lbnQpOiBzdHJpbmcge1xuICogICAgIHJldHVybiBjbXAgPyBjbXAud2hlcmUgKyAnIGNoaWxkJyA6ICdubyBjaGlsZCc7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICB0ZW1wbGF0ZTogYDxwYXJlbnQtY21wPjwvcGFyZW50LWNtcD5gLFxuICogICBkaXJlY3RpdmVzOiBbUGFyZW50Q29tcG9uZW50XVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHAge1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHApLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWZ0ZXJWaWV3SW5pdCB7IG5nQWZ0ZXJWaWV3SW5pdCgpOyB9XG5cbi8qKlxuICogSW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvIGdldCBub3RpZmllZCBhZnRlciBldmVyeSBjaGVjayBvZiB5b3VyIGNvbXBvbmVudCdzIHZpZXcuXG4gKlxuICogIyMjIEV4YW1wbGUgKFtsaXZlIGRlbW9dKGh0dHA6Ly9wbG5rci5jby9lZGl0LzBxREdIY1BRa2MyNUNYaFROektVP3A9cHJldmlldykpXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQENvbXBvbmVudCh7c2VsZWN0b3I6ICdjaGlsZC1jbXAnLCB0ZW1wbGF0ZTogYHt7d2hlcmV9fSBjaGlsZGB9KVxuICogY2xhc3MgQ2hpbGRDb21wb25lbnQge1xuICogICBASW5wdXQoKSB3aGVyZTogc3RyaW5nO1xuICogfVxuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ3BhcmVudC1jbXAnLFxuICogICB0ZW1wbGF0ZTogYFxuICogICAgIDxidXR0b24gKGNsaWNrKT1cInNob3dWaWV3ID0gIXNob3dWaWV3XCI+VG9nZ2xlIHZpZXcgY2hpbGQ8L2J1dHRvbj5cbiAqICAgICA8Y2hpbGQtY21wICpuZ0lmPVwic2hvd1ZpZXdcIiB3aGVyZT1cInZpZXdcIj48L2NoaWxkLWNtcD5gLFxuICogICBkaXJlY3RpdmVzOiBbTmdJZiwgQ2hpbGRDb21wb25lbnRdXG4gKiB9KVxuICogY2xhc3MgUGFyZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gKiAgIEBWaWV3Q2hpbGQoQ2hpbGRDb21wb25lbnQpIHZpZXdDaGlsZDogQ2hpbGRDb21wb25lbnQ7XG4gKiAgIHNob3dWaWV3ID0gdHJ1ZTtcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIC8vIHZpZXdDaGlsZCBpcyBub3QgaW5pdGlhbGl6ZWQgeWV0XG4gKiAgICAgY29uc29sZS5sb2codGhpcy5nZXRNZXNzYWdlKHRoaXMudmlld0NoaWxkKSk7XG4gKiAgIH1cbiAqXG4gKiAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAqICAgICAvLyB2aWV3Q2hpbGQgaXMgdXBkYXRlZCBhZnRlciB0aGUgdmlldyBoYXMgYmVlbiBjaGVja2VkXG4gKiAgICAgY29uc29sZS5sb2coJ0FmdGVyVmlld0NoZWNrZWQ6ICcgKyB0aGlzLmdldE1lc3NhZ2UodGhpcy52aWV3Q2hpbGQpKTtcbiAqICAgfVxuICpcbiAqICAgcHJpdmF0ZSBnZXRNZXNzYWdlKGNtcDogQ2hpbGRDb21wb25lbnQpOiBzdHJpbmcge1xuICogICAgIHJldHVybiBjbXAgPyBjbXAud2hlcmUgKyAnIGNoaWxkJyA6ICdubyBjaGlsZCc7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdhcHAnLFxuICogICB0ZW1wbGF0ZTogYDxwYXJlbnQtY21wPjwvcGFyZW50LWNtcD5gLFxuICogICBkaXJlY3RpdmVzOiBbUGFyZW50Q29tcG9uZW50XVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHAge1xuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHApLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWZ0ZXJWaWV3Q2hlY2tlZCB7IG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOyB9XG4iXX0=