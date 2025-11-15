
const includeEditorSection = () => {
  document.querySelector(`main`).innerHTML += `
      <div id="editorSection" class="hidden">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div class="lg:col-span-1 space-y-4">
                    <div class="bg-card rounded-lg border border-border p-4">
                        <h3 class="text-lg font-semibold text-foreground mb-4">Settings</h3>
                        
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-foreground mb-2">Grid Size</label>
                            <div class="flex gap-2">
                                <div class="flex-1">
                                    <label class="text-xs text-muted-foreground">Columns</label>
                                    <input type="number" id="gridCols" min="1" max="10" value="3" class="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                                </div>
                                <div class="flex-1">
                                    <label class="text-xs text-muted-foreground">Rows</label>
                                    <input type="number" id="gridRows" min="1" max="10" value="3" class="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                                </div>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="block text-sm font-medium text-foreground mb-2">Paper Size</label>
                            <select id="paperSize" class="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                                <option value="a4">A4 (210 × 297 mm)</option>
                                <option value="a3">A3 (297 × 420 mm)</option>
                                <option value="letter">Letter (216 × 279 mm)</option>
                                <option value="legal">Legal (216 × 356 mm)</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="block text-sm font-medium text-foreground mb-2">Orientação</label>
                            <div class="flex gap-2">
                                <button id="orientationPortrait" class="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-md font-medium transition-colors">
                                    Portrait
                                </button>
                                <button id="orientationLandscape" class="flex-1 px-3 py-2 bg-secondary text-secondary-foreground rounded-md font-medium transition-colors">
                                    Landscape
                                </button>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="block text-sm font-medium text-foreground mb-2">Margins (mm)</label>
                            <input type="number" id="margins" min="0" max="50" value="10" class="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                        </div>

                        <div class="mb-4">
                            <label class="block text-sm font-medium text-foreground mb-2">Overlap (mm)</label>
                            <input type="number" id="overlap" min="0" max="30" value="5" class="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                        </div>

                        <div class="mb-4 flex items-center justify-between">
                            <label class="text-sm font-medium text-foreground">Show Numbers</label>
                            <input type="checkbox" id="showNumbers" checked class="h-5 w-5 rounded border-border text-primary focus:ring-primary">
                        </div>

                        <div class="mb-4 flex items-center justify-between">
                            <label class="text-sm font-medium text-foreground">Cut Lines</label>
                            <input type="checkbox" id="showCutLines" checked class="h-5 w-5 rounded border-border text-primary focus:ring-primary">
                        </div>
                    </div>
                    <div class="space-y-2">
                        <button id="exportPDF" class="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                           Export as PDF (PDF)
                        </button>
                        <button id="exportZIP" class="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Export as ZIP (JPG)
                        </button>
                        <button id="resetBtn" class="w-full px-4 py-3 bg-destructive text-destructive-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                            New Image
                        </button>
                    </div>
                </div>

                <div class="lg:col-span-3">
                    <div class="bg-card rounded-lg border border-border p-4">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold text-foreground">Visualização</h3>
                            <div class="flex items-center gap-2">
                                <button id="zoomOut" class="p-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 transition-opacity">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"></path>
                                    </svg>
                                </button>
                                <span id="zoomLevel" class="text-sm text-muted-foreground min-w-12 text-center">100%</span>
                                <button id="zoomIn" class="p-2 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 transition-opacity">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="overflow-auto max-h-[calc(100vh-12rem)] bg-muted/30 rounded-lg p-4">
                            <div id="posterGrid" class="inline-block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  `;
};