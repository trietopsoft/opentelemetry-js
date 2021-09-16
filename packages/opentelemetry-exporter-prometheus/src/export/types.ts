/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Configuration interface for prometheus exporter
 */
export interface ExporterConfig {
  /**
   * App prefix for metrics, if needed
   *
   * @default ''
   * */
  prefix?: string;

  /**
   * Append timestamp to metrics
   * @default true
   */
  appendTimestamp?: boolean;

  /**
   * Time window for metrics export in milliseconds. Only serialize values that have a timestamp
   * within +/- x milliseconds of the reporting period. Enforced when 'appendTimestamp' is true.
   * Negative values disable the time window check.
   *
   * Suggested time window is 10 minutes (600,000 ms)
   *
   * The Prometheus collector enforces a time-bounds check on collected metrics of 10 minutes
   * before or after the current timestamp. Log messages will be generated on metrics that are
   * produced outside of these bounds.
   *
   * @default -1 (disabled)
   */
  timeWindow?: number;

  /**
   * Endpoint the metrics should be exposed at with preceding slash
   * @default '/metrics'
   */
  endpoint?: string;

  /**
   * @default undefined (all interfaces)
   */
  host?: string;

  /**
   * Port number for Prometheus exporter server
   *
   * Default registered port is 9464:
   * https://github.com/prometheus/prometheus/wiki/Default-port-allocations
   * @default 9464
   */
  port?: number;

  /**
   * Prevent the Prometheus exporter server from starting
   * @default false
   */
  preventServerStart?: boolean;
}
