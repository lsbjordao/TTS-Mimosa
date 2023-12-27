// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa leimonias
const Mimosa_leimonias = new Mimosa()
Mimosa_leimonias.specificEpithet = 'leimonias'

Mimosa_leimonias.stems = new Stems()

Mimosa_leimonias.stipule = new Stipule()
Mimosa_leimonias.stipule.margin = new MarginStipule()
Mimosa_leimonias.stipule.adaxial = new AdaxialStipule()
Mimosa_leimonias.stipule.abaxial = new AbaxialStipule()

Mimosa_leimonias.leaf = new Leaf()
Mimosa_leimonias.leaf.petiole = new Petiole()
Mimosa_leimonias.leaf.bipinnate = new Bipinnate()
Mimosa_leimonias.leaf.bipinnate.rachis = new Rachis()
Mimosa_leimonias.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_leimonias.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_leimonias.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_leimonias.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_leimonias.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_leimonias.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_leimonias.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(30)
Mimosa_leimonias.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(35, 5)
Mimosa_leimonias.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_leimonias.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_leimonias.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_leimonias.inflorescence = new Inflorescence()
Mimosa_leimonias.inflorescence.peduncle = new Peduncle()
Mimosa_leimonias.inflorescence.capitate = new CapitateInflorescence()

Mimosa_leimonias.flower = new Flower()
Mimosa_leimonias.flower.bracteole = new Bracteole()
Mimosa_leimonias.flower.merism = '4-merous'
Mimosa_leimonias.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_leimonias.flower.calyx = new Calyx()
Mimosa_leimonias.flower.calyx.shape = 'collar'
Mimosa_leimonias.flower.corolla = new Corolla()

Mimosa_leimonias.androecium = new Androecium()
Mimosa_leimonias.androecium.filaments = new Filaments()
Mimosa_leimonias.androecium.filaments.colour = 'pinkish'

Mimosa_leimonias.ginoecium = new Ginoecium()
Mimosa_leimonias.ginoecium.ovary = new Ovary()

Mimosa_leimonias.fruit = new Fruit()
Mimosa_leimonias.fruit.stipe = new Stipe()
Mimosa_leimonias.fruit.replum = new Replum()
Mimosa_leimonias.fruit.epicarp = new Epicarp()

Mimosa_leimonias.seed = new Seed()


// Description authorship
Mimosa_leimonias.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_leimonias.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa leimonias
export { Mimosa_leimonias }