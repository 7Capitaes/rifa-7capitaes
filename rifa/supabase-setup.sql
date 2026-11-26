-- ============================================================
-- RIFA DE VERÃO 7 CAPITÃES: configuração do banco (Supabase)
-- Cole tudo no SQL Editor do Supabase e clique em RUN (uma vez).
-- ============================================================

-- Tabela das vendas (um número por linha)
create table if not exists public.numeros (
  numero            integer primary key check (numero > 0),
  comprador_nome    text not null,
  comprador_contato text not null,
  vendido_em        timestamptz not null default now()
);

-- Segurança: ninguém lê/altera a tabela sem estar logado como admin
alter table public.numeros enable row level security;

drop policy if exists "admin_total" on public.numeros;
create policy "admin_total" on public.numeros
  for all to authenticated
  using (true) with check (true);

-- O público só consegue saber QUAIS números foram vendidos
-- (nunca nome nem contato do comprador)
create or replace function public.numeros_vendidos()
returns setof integer
language sql
security definer
set search_path = public
as $$
  select numero from public.numeros order by numero;
$$;

revoke all on function public.numeros_vendidos() from public;
grant execute on function public.numeros_vendidos() to anon, authenticated;
