// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Stems, Trichomes, Leaf, Stipule, Inflorescence, Flower, Androecium, Ginoecium, Fruit, Seed } from '../../characters/v1'
import { Dendritic, Fasciculate, Capitate } from '../../characters/v1/Trichomes'
import { CapitateFiliform } from '../../characters/v1/Trichomes/Capitate'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Leaflet, Paraphillidia, Rachilla } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { AbaxialLeaflet, AdaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'


// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'
import { AbaxialStipule, AdaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { CapitateInflorescence, Peduncle } from '../../characters/v1/Inflorescence'
import { Bracteole, Calyx, Corolla } from '../../characters/v1/Flower'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Epicarp, Replum, Stipe } from '../../characters/v1/Fruit'

// Description of Mimosa aurivillus var. calothamnos
const Mimosa_aurivillus_var_calothamnos = new Mimosa()
Mimosa_aurivillus_var_calothamnos.specificEpithet = 'aurivillus var. calothamnos'

Mimosa_aurivillus_var_calothamnos.stems = new Stems()
Mimosa_aurivillus_var_calothamnos.stems.trichomes = new Trichomes()
Mimosa_aurivillus_var_calothamnos.stems.trichomes.dendritic = new Dendritic()
Mimosa_aurivillus_var_calothamnos.stems.trichomes.dendritic.are = 'present'

Mimosa_aurivillus_var_calothamnos.stipule = new Stipule()
Mimosa_aurivillus_var_calothamnos.stipule.margin = new MarginStipule()
Mimosa_aurivillus_var_calothamnos.stipule.adaxial = new AdaxialStipule()
Mimosa_aurivillus_var_calothamnos.stipule.abaxial = new AbaxialStipule()

Mimosa_aurivillus_var_calothamnos.leaf = new Leaf()
Mimosa_aurivillus_var_calothamnos.leaf.petiole = new Petiole()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate = new Bipinnate()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.rachis = new Rachis()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(1)
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 5)
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 21)
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate = new Fasciculate()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.are = 'present'
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.margin.trichomes = new Trichomes()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.margin.trichomes.capitate = new Capitate()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.margin.trichomes.capitate.are = 'present'
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.margin.trichomes.capitate.filiform = new CapitateFiliform()
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.margin.trichomes.capitate.filiform.are = 'present'

Mimosa_aurivillus_var_calothamnos.inflorescence = new Inflorescence()
Mimosa_aurivillus_var_calothamnos.inflorescence.peduncle = new Peduncle()
Mimosa_aurivillus_var_calothamnos.inflorescence.capitate = new CapitateInflorescence()

Mimosa_aurivillus_var_calothamnos.flower = new Flower()
Mimosa_aurivillus_var_calothamnos.flower.bracteole = new Bracteole()
Mimosa_aurivillus_var_calothamnos.flower.merism = '4-merous'
Mimosa_aurivillus_var_calothamnos.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_aurivillus_var_calothamnos.flower.calyx = new Calyx()
Mimosa_aurivillus_var_calothamnos.flower.calyx.shape = 'campanulate'
Mimosa_aurivillus_var_calothamnos.flower.corolla = new Corolla()
Mimosa_aurivillus_var_calothamnos.flower.corolla.shape = 'campanulate'

Mimosa_aurivillus_var_calothamnos.androecium = new Androecium()
Mimosa_aurivillus_var_calothamnos.androecium.filaments = new Filaments()
Mimosa_aurivillus_var_calothamnos.androecium.filaments.colour = 'yellowish'

Mimosa_aurivillus_var_calothamnos.ginoecium = new Ginoecium()
Mimosa_aurivillus_var_calothamnos.ginoecium.ovary = new Ovary()

Mimosa_aurivillus_var_calothamnos.fruit = new Fruit()
Mimosa_aurivillus_var_calothamnos.fruit.stipe = new Stipe()
Mimosa_aurivillus_var_calothamnos.fruit.replum = new Replum()
Mimosa_aurivillus_var_calothamnos.fruit.epicarp = new Epicarp()

Mimosa_aurivillus_var_calothamnos.seed = new Seed()


// Description authorship
Mimosa_aurivillus_var_calothamnos.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_aurivillus_var_calothamnos.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources

const source0 = new Source()
source0.sourceType = 'article'
source0.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source0.year = '2018'
source0.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil'
source0.journal = 'Systematic Botany'
source0.volume = '43'
source0.number = '1'
source0.pages = '162-197'
Mimosa_aurivillus_var_calothamnos.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = '2020'
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = '272'
source1.pages = '151702'
source1.figure = '5E'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_aurivillus_var_calothamnos.stems.trichomes.dendritic.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = '2020'
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = '272'
source2.pages = '151702'
source2.figure = '5I'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_aurivillus_var_calothamnos.stems.trichomes.dendritic.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = '2020'
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = '272'
source3.pages = '151702'
source3.figure = '6E'
source3.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.fasciculate.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = '2020'
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = '272'
source4.pages = '151702'
source4.figure = '8D'
source4.obtainingMethod = 'opticalMicroscope'
Mimosa_aurivillus_var_calothamnos.leaf.bipinnate.pinnae.leaflet.margin.trichomes.capitate.filiform.addSource(source4)

// Export Mimosa aurivillus var. calothamnos
export { Mimosa_aurivillus_var_calothamnos }