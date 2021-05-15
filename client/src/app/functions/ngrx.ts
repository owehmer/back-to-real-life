import { action, fsa } from 'ts-action/action';

export function GenerateAction<TRequestPayload, TResultPayload, TErrorPayload = unknown>(featureName: string, actionDescription: string) {
  const prefix = `[${featureName}] ${actionDescription}`;
  return {
    request: action(`${prefix} [Request]`, fsa<TRequestPayload>()),
    result: action(`${prefix} [Result]`, fsa<TResultPayload>()),
    error: action(`${prefix} [Error]`, fsa<TErrorPayload>())
  }
}
