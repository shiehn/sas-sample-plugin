/**
 * @signalsandsorcery/sample-player — Built-in Sample Player Plugin
 *
 * Provides sample library browsing, import, time-stretching,
 * and scene-scoped sample track management.
 */

import type { ComponentType } from 'react';
import type {
  GeneratorPlugin,
  PluginHost,
  PluginUIProps,
  PluginSettingsSchema,
  MusicalContext,
} from '@signalsandsorcery/plugin-sdk';
import { SamplePlayerPanel } from './SamplePlayerPanel';

export class SamplePlayerPlugin implements GeneratorPlugin {
  readonly id = '@signalsandsorcery/sample-player';
  readonly displayName = 'Samples';
  readonly version = '1.0.0';
  readonly description = 'Sample library browser with time-stretching and scene-scoped playback';
  readonly generatorType = 'sample' as const;
  readonly minHostVersion = '1.0.0';

  private host: PluginHost | null = null;

  async activate(host: PluginHost): Promise<void> {
    this.host = host;
    console.log('[SamplePlayerPlugin] Activated');
  }

  async deactivate(): Promise<void> {
    this.host = null;
    console.log('[SamplePlayerPlugin] Deactivated');
  }

  getUIComponent(): ComponentType<PluginUIProps> {
    return SamplePlayerPanel;
  }

  getSettingsSchema(): PluginSettingsSchema | null {
    return null;
  }

  async onSceneChanged(_sceneId: string | null): Promise<void> {
    // Sample tracks are loaded by the host on scene change
  }

  onContextChanged(_context: MusicalContext): void {
    // Could update time-stretch parameters when BPM changes
  }
}

export default SamplePlayerPlugin;
