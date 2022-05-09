-- migrate:up
CREATE OR REPLACE FUNCTION public.random_chinese_name() 
RETURNS TEXT AS $$
  SELECT
    arrays.names [public.random_between(0, ARRAY_LENGTH(arrays.names,1))] AS name
  FROM
    generate_series(1, 1) AS s(a) -- number of names to generate
    CROSS JOIN(
      SELECT
        ARRAY [
        '图开心', '红尘客', '美汉子', '养心人', '谷芭比', '千秋诉', '骨中花', '花间霜',
        '樱花吟', '绝逼酷', '我透明', '心外人', '软耳语', '花下酒', '抱紧怼', '稚痴诗',
        '孤悄月', '真心话', '爆粗口', '痴呈i', '莫丿離', '冷劍℡', '夏木i', '黑↘云',
        '雷の暴', '羽╃翼', '霸の战', '灵メ风', '邪☆尊', '袭の霜', '狼の神', '心、妍',
        '雪の樱', '魅╰美', '夏灬末', '万般险恶', '劣质的你', '感情像风', '彼岸纱华', '晚安少女',
        '感情游戏', '刚好遇见', '日久生厌', '傲娇少年', '温柔可靠', '刀口誓言', '走的像风', '野味情书',
        '秋意正浓', '耳边私语', '杀死喜欢', '岁月叹情', '酸味奶糖', '全网独宠', '娇纵心性'
      ] AS names
    ) AS arrays 
$$ LANGUAGE SQL STABLE;

-- migrate:down
DROP FUNCTION IF EXISTS public.random_chinese_name;