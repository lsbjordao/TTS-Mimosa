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


// Description of Mimosa leiocephala
const Mimosa_leiocephala = new Mimosa()
Mimosa_leiocephala.specificEpithet = 'leiocephala'

Mimosa_leiocephala.stems = new Stems()

Mimosa_leiocephala.stipule = new Stipule()
Mimosa_leiocephala.stipule.margin = new MarginStipule()
Mimosa_leiocephala.stipule.adaxial = new AdaxialStipule()
Mimosa_leiocephala.stipule.abaxial = new AbaxialStipule()

Mimosa_leiocephala.leaf = new Leaf()
Mimosa_leiocephala.leaf.petiole = new Petiole()
Mimosa_leiocephala.leaf.bipinnate = new Bipinnate()
Mimosa_leiocephala.leaf.bipinnate.rachis = new Rachis()
Mimosa_leiocephala.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_leiocephala.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_leiocephala.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 15)
Mimosa_leiocephala.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_leiocephala.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_leiocephala.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_leiocephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(40, 70)
Mimosa_leiocephala.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_leiocephala.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_leiocephala.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_leiocephala.inflorescence = new Inflorescence()
Mimosa_leiocephala.inflorescence.peduncle = new Peduncle()
Mimosa_leiocephala.inflorescence.capitate = new CapitateInflorescence()

Mimosa_leiocephala.flower = new Flower()
Mimosa_leiocephala.flower.bracteole = new Bracteole()
Mimosa_leiocephala.flower.merism = '4-merous'
Mimosa_leiocephala.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_leiocephala.flower.calyx = new Calyx()
Mimosa_leiocephala.flower.calyx.shape = ['turbinate', 'campanulate']
Mimosa_leiocephala.flower.corolla = new Corolla()
Mimosa_leiocephala.flower.corolla.shape = 'funnelform'

Mimosa_leiocephala.androecium = new Androecium()
Mimosa_leiocephala.androecium.filaments = new Filaments()
Mimosa_leiocephala.androecium.filaments.colour = 'pinkish'

Mimosa_leiocephala.ginoecium = new Ginoecium()
Mimosa_leiocephala.ginoecium.ovary = new Ovary()

Mimosa_leiocephala.fruit = new Fruit()
Mimosa_leiocephala.fruit.stipe = new Stipe()
Mimosa_leiocephala.fruit.replum = new Replum()
Mimosa_leiocephala.fruit.epicarp = new Epicarp()

Mimosa_leiocephala.seed = new Seed()


// Description authorship
Mimosa_leiocephala.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_leiocephala.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa leiocephala
export { Mimosa_leiocephala }